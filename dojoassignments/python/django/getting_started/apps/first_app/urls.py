from django.conf.urls import url
from . import views #import from controller!
urlpatterns = [
    url(r'^$', views.index)
]

