from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse

from .models import Question


def index(request):
    return HttpResponse("Hello world. This is the backend api.")


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    ret = "Question: {} - Published {}".format(question.question_text, question.pub_date)
    return HttpResponse(ret)
