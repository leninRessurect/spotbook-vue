class ClipLikeButton {
    constructor(clip_id) {
        this.clip_id = clip_id;
    }

    // FETCHERS
    // check if user likes spot
    async fetchDoesUserLikeClip() {
        let url = `http://127.0.0.1:8000/clips/api/does-user-like/${this.clip_id}/`;
        try {
            let response = await(fetch(url));
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    // METHODS
    //method
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // like button event listener
    processLikeForm(event) {
        event.preventDefault();
        let form = document.getElementById('clip-like-button-form');
        let action = form.action.value;
        let url = form.getAttribute('action');
        let dataObj = {'action': action,};
        let data = JSON.stringify(dataObj);
        let cookie = form.csrfmiddlewaretoken.value;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'X-CSRFToken': cookie
            },
            body: data,
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })

        location.reload();

        return false;
    }


    // GETTERS

    async doesUserLikeClip() {
        var result = await this.fetchDoesUserLikeClip();
        return result.data;
    }

    get csrfCookie() {
        return this.getCookie('csrftoken');
    }

    async button() {
        var likes = await this.doesUserLikeClip();
        if (likes) {
            return this.buildButton('unlike');
        } else {
            return this.buildButton('like');
        }  
    }

    // BUILDERS

    buildButton(action) {
        const csrftoken = this.csrfCookie;

        const buttonDiv = document.createElement('div');
        buttonDiv.id = 'like-button-div';

        const form = document.createElement('form');
        form.id = 'clip-like-button-form';
        form.action = `http://127.0.0.1:8000/clips/api/clip-like-action/${this.clip_id}/`;
        form.method = 'POST';
        form.headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        }
        form.addEventListener('submit', this.processLikeForm);

        const button = document.createElement('button');
        button.id = 'clip-like-button';
        button.type = 'submit';
        button.setAttribute('class', 'btn btn-secondary');
        button.textContent = `${action}`;

        const formAction = document.createElement('input');
        formAction.type = 'hidden';
        formAction.name = 'action';
        formAction.value = action;

        const inputElem = document.createElement('input');
        inputElem.type = 'hidden';
        inputElem.name = 'csrfmiddlewaretoken';
        inputElem.value = csrftoken;

        form.appendChild(button);
        form.appendChild(formAction);
        form.appendChild(inputElem);
        buttonDiv.appendChild(form);


        return buttonDiv;
    }

    // RENDERERS

    async render(target_div) {
        const likeButton = await this.button();
        const target = document.getElementById(target_div);
        target.appendChild(likeButton);
    }
}
    