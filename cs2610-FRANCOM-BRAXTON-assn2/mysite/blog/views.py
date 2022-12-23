from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.shortcuts import get_object_or_404
from django.utils import timezone
from time import strftime

from .models import Blog, Comments

def blogHome(request):
    blogPost = Blog.objects.order_by('-posted')[:3]
    comments = Comments.objects.all()

    return render(request, 'blog/blogHome.html',
                  {"now": strftime("%c"),
                   "posts": blogPost,
                   "comments": comments
                   })

def entry(request, blogEntry_id):
    entry = get_object_or_404(Blog, pk=blogEntry_id)

    if request.POST:
        Comments(blog=entry, commenter=request.POST['commenter'], email=request.POST['email'],
                 content=request.POST['content'], posted=timezone.now()).save()
        return HttpResponseRedirect(reverse('blog:entry', args=(blogEntry_id,)))

    else:
        comments = Comments.objects.filter(blog=blogEntry_id).order_by('-posted')
        return render(request, 'blog/entry.html',
                      {"now": strftime("%c"),
                       "entry": entry,
                       "comments": comments,
                       })

def archive(request):
    blogPost = Blog.objects.order_by('-posted')

    return render(request, 'blog/archive.html',
                  {"now": strftime("%c"),
                   "posts": blogPost
                  })

def about(request):
    return render(request, 'blog/about.html',
                  {"now": strftime("%c")})

def plan(request):
    return render(request, 'blog/plan.html',
                  {"now": strftime("%c")})

def techTipsWithCss(request):
    return render(request, 'blog/techtips+css.html',
                  {"now": strftime("%c")})

def techTipsNoCss(request):
    return render(request, 'blog/techtips-css.html',
                  {"now": strftime("%c")})
