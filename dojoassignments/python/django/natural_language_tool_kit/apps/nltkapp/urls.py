from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^handle_sentence', views.handle_sentence, name='handle_sentence'),
    url(r'^success', views.success, name='success'),
]