---
layout: post
title: Automate or Die
author: Nicholas Young
category: resources
---

Whether you're flying solo, or working with a team, there's no doubt - writing software takes an immense amount of time and energy. Truth be told - it's an arduous - even boring task at times. Over the last year, I've studied how great developers work, what environments foster creativity, and the practices that, if followed, allow anyone to become a true software craftsman.

If I said there was a single golden rule, I'd be lying. But, there is a single element that all great craftsmen possess - and it isn't the editor you use, or framework of choice. It's the ability to identify and automate the time-consuming processes in your workflow. So, whether it's setting up 1,000 servers - or creating a stable development environment - listen up, because here's five tools to increase your productivity.

## [Terminitor - by Arthur Chiu](https://github.com/achiu/terminitor/)

Terminitor is a small, but mighty automation framework for OS-X. It's been ported to other operating systems, but this is the original. On a recent project, every time I started to code, I had to open my MongoDB server, Resque worker, and Postfix mail agent - and, as you can imagine, this was a hassle.

Enter Terminitor. Now, each project has a Termfile - an elegant, Ruby-based configuration file. Clone the repository, and you're one keystroke away from development bliss.

## [Screwcap - by Grant Ammons](http://gammons.github.com/screwcap/)

I think we all agree: Capistrano is a dinosaur. Don't get me wrong - it's the swiss-army knife of deployment frameworks - with every bell, whistle, and toothpick you could care for. But sometimes, you need to specialize.

Screwcap is a lightweight wrapper around Net::SSH that makes it easier to perform actions on remote servers. Whether it's restarting your Passenger instance, loading new configuration files, or cleaning out old logs, Screwcap has you covered.

## [Infinity Test - by Thomas D'Stefano](https://github.com/tomas-stefano/infinity_test/)
## [Phusion Passenger 3](http://www.modrails.com/)

It's a typical TDD cycle: test, write, refactor - and eventually - deploy. However, this time, your code doesn't work so well in production. Okay, so it doesn't work at all... instead, it explodes.

We've all been there. To developers, this is the stuff nightmares are made of. Fortunately, this can be prevented with two simple tools.

If you're using Wayne Seguin's RVM (and if not, why aren't you?) Infinity Test allows you to test against multiple versions of Ruby, ensuring that your application runs properly across any system you might happen to deploy on.

Combine this with the second tool, Phusion Passenger Lite (available in Passenger 3+), and you've almost perfectly cloned your production environment. So goodbye, rails server - hello Nginx!

## [Fuubar - by Jeff Kreeftmeijer](https://github.com/jeffkreeftmeijer/fuubar/)

This may step on some toes, but I'll say it anyway. Your test suite exists for one reason: to provide feedback. When used properly, it can be used to determine the quality of your codebase, and ensure smooth, confident deployments. However, if the feedback loop takes 20 minutes to complete, most everyone agrees: your tests are useless.

If you're using RSpec, allow me to present Fuubar. This is itch-driven-development at it's best: Jeff had an itch, and he scratched it. Install the gem, and a few moments later, you'll be proudly watching the green progress bar scroll across - as your tests pass. (Unless, of course, they fail... and only you know how to describe that.)