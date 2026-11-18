---
title: "Paper Summary: Whittle Index Scheduling for Age of Information in IoT Networks"
date: 2026-09-18
permalink: /posts/2026/09/paper-summary-smartiot2025/
category: Research
related: false
tags:
  - paper summary
  - age of information
  - IoT
  - restless bandits
---

This post summarizes our paper published at **IEEE SmartIOT 2025**:

> *A Novel Whittle Index-Based Scheduling for Age of Information Minimization in IoT Networks*

## Motivation

In IoT networks, keeping information fresh matters. A sensor reading that is 10 seconds old may be useless for real-time control. **Age of Information (AoI)** captures this freshness — it measures the time elapsed since the last successful update from a source.

The challenge: with many sensors and limited transmission slots, which sensors should you update at each time step to keep the overall network as fresh as possible?

## Our Approach

We modeled this as a **Restless Multi-Armed Bandit (RMAB)** problem, where each sensor is an "arm" with an evolving AoI state. We derived a **Whittle index policy** — a lightweight, scalable scheduling rule that assigns a priority score to each sensor based on its current AoI.

Key contributions:
- Proved the **indexability** of the AoI bandit problem under our model
- Derived a **closed-form Whittle index** for efficient computation
- Demonstrated near-optimal performance through simulations

## Results

Our Whittle index policy significantly outperformed baseline round-robin scheduling and came close to the optimal policy computed by dynamic programming — at a fraction of the computational cost.

## Link

Full paper: [IEEE SmartIOT 2025](https://ieeexplore.ieee.org/document/11311674)

---

*This post is part of the Research series — plain-language summaries of my published work.*
