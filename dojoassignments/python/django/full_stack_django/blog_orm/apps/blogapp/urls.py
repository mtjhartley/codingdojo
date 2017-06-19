from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blogs$', views.blogs, name='blogs'),
    url(r'^comments/(?P<blog_id>\d)$', views.comments),
]