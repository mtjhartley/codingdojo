from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^secrets$', views.secrets, name='secrets'),
    url(r'^handle_secrets$', views.handle_secrets, name='handle_secrets'),
    url(r'^delete_secrets/(?P<secret_id>\d+)$', views.delete_secrets, name='delete_secrets'),
    url(r'^like_secrets/(?P<secret_id>\d+)$', views.like_secrets, name='like_secrets'),
    url(r'^hall_of_fame$', views.hall_of_fame, name='hall_of_fame'),
]