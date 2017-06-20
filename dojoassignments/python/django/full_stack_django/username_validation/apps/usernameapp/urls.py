from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^handle_registration$', views.handle_registration, name='handle_registration'),
    url(r'^success$', views.success, name='success'),
    url(r'^destroy/(?P<user_id>\d+)$', views.destroy, name='destroy'),
]