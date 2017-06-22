from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^client/add$', views.client_add, name='client_add'),
    url(r'^client/handle_add$', views.handle_client_add, name='handle_client_add'),
    url(r'^client/(?P<client_id>\d+)$', views.client_show, name='client_show'),
    url(r'^client/(?P<client_id>\d+)/addproject$', views.project_add, name='project_add'),
    url(r'^client/(?P<client_id>\d+)/handle_add$', views.handle_project_add, name='handle_project_add'),
    url(r'^show/projects/(?P<project_id>\d+)$', views.project_show, name='project_show'),
]