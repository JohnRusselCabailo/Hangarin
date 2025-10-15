from django.shortcuts import render

from django.views.generic.list import ListView
from app1.models import Priority, Task

class HomePageView(ListView):
    model = Priority
    context_object_name = 'home'
    template_name = "home.html"

class TaskList(ListView):
    model = Task
    context_object_name = 'task'
    template_name = 'task_list.html'
    paginate_by = 5