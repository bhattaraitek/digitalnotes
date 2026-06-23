---
title: DUALFloodGNN 
draft: false
date: 2026-06-23
tags: 
    - flooding
    - floods
    - GNN
    - deep learning
    - machine learning
---

# Summary
- DUALFloodGNN is proposed which embeds physical constaints at both global and local scales through explicit loss terms.
- Jointly predicts both nodes and edge features.

# Gap it is addressing
- Previous physics-informed GNN implementation enforced mass consevation at global scale only and local mass conservation is implicitly assumed.
- This paper try to address this gap by enforcing both global and node level mass conservation.

# Architecture
- **Input and outputs**
    - static features: area, elevation
    - dynamic features: volume, flow, rainfall, global infow upto p previous timesteps
    - target features: predicts change in water volume $ \Delta V $ and water flow $ \Delta Q$ from the current timestep to next timestep.

- **Encoder**
    - 2 encoders for node and edge features. MLP layers.

- **Processor: Shared Message Passing**
    - $L_{GNN}$ message passing layers
    - Uses MLP to determine messages ($m_{ij}$) for between nodes i and j
    - Aggregation, and fed to MLP to update node embeddings
    - Updated edge embeddings are overwritten with message ($m_{ij}$)
    - Residual connections added at each node

- **Decoder**
    - Separate decoder for volume and flow
    - MLP layers
    
> [!note]
> The encoders, decoders and message passing functions are all implemented as MLPs with $L_{MLP}$ layers.

- ReLU activation used after each MLP layer.
- Biased term omitted following the design of [[Bentivoglio-SWE-GNN.md|SWE-GNN]].

# Physics-informed loss functions
- **Multi-task prediction loss**: total prediction loss computed as weighted sum of volume (node) and flow (edge) loss.
- **Mass balance regularization**:
    - Global level regularization: entire catchment considered as control volume
    - Local level regularization: each individual node is considered as control volume

# Auto-regressive training
- Multi-step ahead loss: Adopt approach of [[Bentivoglio-SWE-GNN.md|SWE-GNN]].
- Dynamic curriculum learning: First predicting 1-step ahead and then incresaing gradually to target rollout length.


# Experimental setup
- Wollombi River watershed in New South Wales, Australia
- 56 flood events simulated using HEC-Residual
- 2D unstructured mesh, graph of *1129* nodes and *2743* edges.
- Each event consistof 576 time steps at 15-mins resolution.

# Results
- DUALFloodGNN performed best for both node volume and edge flow prediction
- 2 to 3 orders of magnitude of speed-up compared to numerical solvers
- Water depth RMSE: $0.21 \pm 0.07$ m

> [!important]
> In contrast to applying only global mass balance, enforcing local-level regularization resulted in a lower RMSE for both node and edge prediction, surpassing the accuracy of the purely data-driven model.
