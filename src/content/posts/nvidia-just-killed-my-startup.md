---
title: Nvidia just killed my startup
description: An overview and a critique of a try.
date: 2026-10-27
---

A bit more than a year ago I started designing with my partner in [SovCo](https://sovco.io) a productised container data centre for AI.

This was the solution I found for the following problems: too much centralisation in the AI infrastructure, no privacy or sovereignty in AI usage and too long timelines for building your own infrastructure.

So, an industrialised data centre in a box was my best bet to address each one of these. Enabling more people and entities to buy it in smaller scale would decentralise the infrastructure, having full control of the hardware and software stack would get you as much privacy and sovereignty as you could get, shortening the whole building time from years to the shipping time of the product would address the build out scale.

At SovCo, months before having this name and working on this project, we were already investigating alternative ways of utilising surplus power from mining, thermal and electrical plants. This and the sovereignty aspect of the problem I mentioned made us decide that we would bring an off-grid option for the first product, untying the data centre from the local grid and the ISP by using solar panels and satellite internet.

My partner works as an electrical engineer with tons of experience in high voltage systems. I worked building DCs and distributed systems, which sounded like a good match to work on this problem.
Even though we had a good understanding about what was necessary for such a system, we spent some weeks learning about thermal/cooling and AI-specific architecture, both hardware and software layers.

Then we spent months designing the product. Weeks understating the economics around chips and data centre for both training and inference of AI. We created complete physical simulations including electrical and thermal systems of the product. CAD’ed the whole product, got a BOM list of every small piece necessary to build it, got multiple quotes for all the list, from different countries to different strategies and product destinations (considering US sanctions, etc…). With all that in hand, we knew most of what we needed to build the product in terms of cost, supply chain, processes, people, structure, operations and whatnot. We also managed to structure the industrial plant for the production we wanted. We figured out the company structure and tax strategies, so we could have a solid business model. We found very interested customers. We spent a lot of time discussing with a few VCs and these possible customers, trying to figure out the best way to fund this, if we should go with a VC or try to make some sort of partnership with the customers.  During this time, we even did a custom project proposal for a relatively big data centre build out using gas turbines as power source with a custom high end version of our product. This project alone would be more than enough to kick off the company and fund the industrialisation we were looking for.

The demand was so obvious at that moment given the conversations we were having, that we decided to focus on funding to scale production, not to validate the product. In our minds, this was going to be a race of who could scale up production faster and deliver the lower lead time, to increase the pace of chips getting online and start delivering revenue as fast as possible, tackling this enormous mismatch between supply and demand in the market. We even added in our business model a rent-the-inventory in case we could build faster than sell.

Last week everything changed. Nvidia announced in Berlin the DSX platform, a whole framework on how to build AI factories, including the DSX Pod, a containerised data centre for AI.
I received it like a strong punch in my stomach. Now, it’s fairly obvious that Nvidia would do it. Once they solved the chip supply chain, they would look ahead and see what’s the next bottleneck in the way of selling more chips, which is exactly the lead time, the time from chip being shipped to chip being online generating revenue. The first solution for it is the container, or modularisation if you prefer. Among our differentiators we had: off-grid capability, sovereignty focused (full control, governance and traceability of the whole DC), being built in Brazil enabled us to buy and sell for both US and China, which basically means the whole world. I also still believe that in the future, we will have way more hardware designers competing with Nvidia. A neutral company in a neutral country could build the best product with the best hardware it can find in the world.
But none of this seems to be a big enough differentiator or innovation to pull us off the radius of the competition.

This is an overview and a critique on what happened. There is a lot to learn from this experience, I’ll probably keep finding more of it, but here are biggest ones for now:

1. **Not enough innovation to get out of competition**: We had a good idea with a few innovations on it, but nothing completely out of the radar to put us far enough from the competition. It also took us too much time to discover that modularisation was already happening in a narrower way in smaller parts of the process of building a DC, which could open our eyes to this problem.
2. **We’re too slow**: We spent too much time caring about all sorts of details, small and big ones. It also seems to me you shouldn’t talk with a few VCs in a personalised way, I think you should have a process-based approach to handle multiple VCs at the same time, like a sales funnel. We spent a lot of time simulating and making the off-grid product right, where the off-grid was just an optionality, not a core product.

