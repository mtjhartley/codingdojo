from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^users$', views.users, name='users'),
    url(r'^show/(?P<user_id>\d+)$', views.show, name='show'),
    url(r'^add$', views.add, name='add'),
    url(r'^remove/(?P<user_id>\d+)/(?P<interest_id>\d+)$', views.remove, name='remove'),
]