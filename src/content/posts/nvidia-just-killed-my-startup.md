---
title: Nvidia just killed my startup
description: A look at what failed and what to learn from it.
date: 2026-10-27
---

A little over a year ago, my partner at [SovCo](https://sovco.io) and I started designing an AI data centre inside a container. Something we could manufacture and ship as a product.

This was the solution I found for the following problems: too much centralisation in the AI infrastructure, no privacy or sovereignty in AI usage and too long timelines for building your own infrastructure.

So, an industrialised data centre in a box was my best bet to address each one of these. Enabling more people and entities to buy it at a smaller scale would decentralise the infrastructure. Having full control of the hardware and software stack would get you as much privacy and sovereignty as possible. Shortening the build time from years to the shipping time of a product would get that infrastructure online faster.

At SovCo, months before having this name and working on this project, we were already investigating alternative ways of utilising surplus power from mining, thermal and electrical plants. This and the sovereignty aspect of the problem I mentioned made us decide that we would bring an off-grid option for the first product, untying the data centre from the local grid and the ISP by using solar panels and satellite internet.

My partner works as an electrical engineer with tons of experience in high voltage systems. I worked building data centres and distributed systems, which sounded like a good match to work on this problem.

Even though we had a good understanding of what was necessary for such a system, we spent some weeks learning about thermal/cooling and AI-specific architecture, both hardware and software layers.

Then we spent months designing the product. Weeks understanding the economics around chips and data centres for both AI training and inference.

We created complete physical simulations including the electrical and thermal systems of the product. CAD’ed the whole product, got a list of every small piece necessary to build it, got multiple quotes for the whole list from different countries, considering different sourcing strategies, product destinations, US sanctions, etc.

With all that in hand, we knew most of what we needed to build the product in terms of costs, supply chain, processes, people, structure, operations and whatnot. We also managed to structure the industrial plant for the production we wanted. We figured out the company structure and tax strategies, so we could have a solid business model.

We found very interested customers. We spent a lot of time talking with a few VCs and these possible customers, trying to figure out the best way to fund this: go with a VC or try to make some sort of partnership with the customers.

During this time, we even did a custom project proposal for a relatively big data centre build out using gas turbines as a power source with a custom high-end version of our product. This project alone would be more than enough to kick off the company and fund the industrialisation we were looking for.

Given the conversations we were having, demand felt so obvious that we focused on funding production scale even before validating the product.

In our minds, this was going to be a race to scale up production faster and offer the shortest lead time. The goal was to get chips online and generating revenue as fast as possible, tackling this enormous mismatch between supply and demand in the market. We even included renting out our inventory in the business model, in case we could build faster than we could sell.

Last week, everything changed.

Nvidia announced the DSX platform in Berlin, a whole framework on how to build AI factories, including the DSX Pod, a containerised data centre for AI.

It felt like a punch in the stomach.

Looking back, it seems fairly obvious that Nvidia would do this. Once they solved the chip supply chain, they would look for the next bottleneck to selling more chips: the time between a chip being shipped and coming online, generating revenue. The first solution is the container, or modularisation if you prefer.

Among our differentiators we had: off-grid capability, a focus on sovereignty (full control, governance and traceability of the whole DC), and being built in Brazil, which would let us buy from and sell to both the US and China. Basically, the whole world.

I also still believe that in the future, we will have way more hardware designers competing with Nvidia. A neutral company in a neutral country could build the best product with the best hardware it could find in the world.

But none of this seems to be a big enough differentiator or innovation to put enough distance between us and the competition.

This is an overview and a critique of what happened. There’s a lot to learn from this experience, and I’ll probably keep finding more. These are the biggest lessons for now:

1. **We didn’t innovate enough to escape the competition**: We had a good idea with a few innovations, but nothing completely off the radar to put us far enough from the competition. It also took us too much time to discover that modularisation was already happening in a narrower way in smaller parts of the process of building a DC. That could have helped us see the problem sooner.
2. **We’re too slow**: We spent too much time caring about all sorts of details, small and big ones. Looking back, I think we needed a process for talking to several VCs at once, like a sales funnel. We spent too long treating each conversation individually. We also spent too long simulating and perfecting the off-grid version. It was an optional feature, not the core product.

> "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better." Samuel Beckett
