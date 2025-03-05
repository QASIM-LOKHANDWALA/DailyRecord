from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.notesView, name='notes'),
    path('<str:slug>/', view=views.noteDetailView, name='note-detail'),
]
