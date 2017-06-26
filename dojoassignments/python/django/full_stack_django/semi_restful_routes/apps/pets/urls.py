from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^pets/new$', views.new, name='new'),
    url(r'^pets/create$', views.create, name='create'),
    url(r'^pets/(?P<pet_id>\d+)$', views.show, name='show'),
    url(r'^pets/(?P<pet_id>\d+)/edit$', views.edit, name='edit'),
    url(r'^pets/(?P<pet_id>\d+)/update$', views.update, name='update'),
    url(r'^pets/(?P<pet_id>\d+)/destroy$', views.destroy, name='destroy'),
]