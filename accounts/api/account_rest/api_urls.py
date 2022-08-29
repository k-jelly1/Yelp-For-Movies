from django.urls import path
from django.contrib.auth import views as auth_views
from .api_views import (
    api_list_accounts,
    api_show_account,
    api_user_token,
    neo_authenticate,
    # SignUpForm,
     )

urlpatterns = [
    path("accounts/", api_list_accounts, name="accounts_list"),
    path("accounts/<int:pk>", api_show_account, name="account_detail"),
    path("tokens/mine/", api_user_token, name="get_token"),
    path("login/", neo_authenticate, name="login"),
    # path("signup/", SignUpForm, name="signup" ),
]