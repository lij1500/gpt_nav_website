# NavLoop

## Proposed project title

**NavLoop: A Harness for Long-Horizon Visual Navigation**

The name emphasizes the observation–decision–execution–feedback loop that sustains navigation over time. It is a working name; publication-name and trademark availability have not been checked.

## Full English translation

Visual navigation requires an agent to understand its surroundings from real-time images and reach a specified goal through continuous action in an unfamiliar environment. For example, the seemingly simple instruction “Start on the first floor, find the kitchen on the second floor, and enter it” involves several stages: room recognition, route exploration, stair traversal, movement between floors, and goal confirmation. The agent must not only determine what to do next, but also remember the areas it has already explored, adjust its strategy based on the outcomes of its actions, and continue making progress throughout an extended task.

Although GPT-6-astra has strong visual understanding and reasoning capabilities and can identify key elements in an environment and generate action instructions, directly invoking the model is not sufficient to ensure successful navigation. Simply providing the current image to the model and executing its proposed action can overlook continuity between actions: the model may repeatedly explore the same areas, continue attempting ineffective movements after becoming blocked, or declare the task complete before reaching the destination. To support long-horizon navigation more reliably, the model’s single-step understanding and decision-making capabilities must therefore be supported by historical context, execution feedback, and task state management.

To address this problem, our main contribution is a navigation harness for GPT-6-astra: a runtime framework that supports sustained task execution. The framework connects visual observations, historical records, action execution, outcome feedback, and task progress management in an observation–decision–execution–feedback loop. This allows the model to choose its next action in light of prior experience and revise its strategy based on actual execution outcomes. In addition, independent evaluation and visual replay are used to verify both the navigation process and the final outcome. Together, these components organize the model’s single-step capabilities into a navigation system that can operate continuously, be verified, and improve through iteration.

## Short description

NavLoop is a navigation harness for GPT-6-astra that connects visual observations, historical context, action execution, feedback, and task progress in a continuous loop for long-horizon visual navigation.

## Editorial guidance

- The full translation preserves the supplied description; the website abstract condenses it.
- The contribution is the navigation harness around the model. Do not describe it as a new foundation model or imply that model training is part of the work without supporting details.
- Display only the supplied videos. Do not create graphs, floorplans, diagrams, or illustrative navigation sequences.
- Label `gpt6_2floor.mp4` as GPT-6-astra and `qwen-3.8.mp4` as Qwen 3.8. Do not infer comparative performance from the videos.
- No measured success rates, baseline improvements, deployment claims, author identities, or affiliations have been supplied.
- The website uses the model name exactly as supplied. Confirm the final public-facing name before publication.
