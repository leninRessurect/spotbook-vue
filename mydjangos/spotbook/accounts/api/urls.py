from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('account-list/', views.accountList, name='api-account-list'),
]