from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^courses$', views.courses, name='courses'),
    url(r'^delete/(?P<course_id>\d)$', views.delete, name='delete'),
    url(r'^destroy/(?P<course_id>\d)$', views.destroy, name='destroy'),


]