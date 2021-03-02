from django.urls import path
from . import views as view
urlpatterns = [
    path('', view.Index.as_view())
]
