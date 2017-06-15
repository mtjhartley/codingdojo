from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^increment$', views.increment),
    url(r'^clear$', views.clear)
]

