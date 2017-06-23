from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^dashboard$', views.dashboard, name='dashboard'),
    url(r'^users/new$', views.add_user, name='add_user'),
    url(r'^users/handle_add_user$', views.handle_add_user, name='handle_add_user'),
    url(r'^users/edit/(?P<user_id>\d+)$', views.edit_user, name='edit_user'),
    url(r'^users/edit/(?P<user_id>\d+)/handle_edit_user$', views.handle_edit_user, name='handle_edit_user'),
    url(r'^users/delete/(?P<user_id>\d+)$', views.handle_delete_user, name='handle_delete_user'),
    url(r'^users/show/(?P<user_id>\d+)$', views.show_user, name='show_user'),
]