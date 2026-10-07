# Phase 1: Brainstorming & Ideation

## Project Title
**FitTrack AI** – Personalized fitness recommendations powered by AI

## Background / Persona
Rahul is a fitness enthusiast who exercises regularly but records his workouts
manually using notebooks and spreadsheets. Although consistent with his
routine, he struggles to organize workout history, monitor progress, and
determine whether his habits align with his fitness goals. He also lacks
professional guidance on which workouts suit his current fitness level.

## Problems Identified
- Difficulty maintaining a centralized record of workouts
- Manual tracking leads to inaccurate workout history
- No secure user authentication for personal fitness records
- Unable to search previous workouts efficiently
- No personalized workout recommendations
- No insights regarding overall workout performance
- Time-consuming manual calculation of calories burned and workout duration

## Idea
Build a secure backend API where users can register, log in, and manage
their own workout history — and layer an AI assistant (Google Gemini) on
top of that data to generate personalized recommendations and performance
insights, removing the need for manual tracking or professional guidance.

## Why This Approach
- A REST API keeps the system usable from web, mobile, or third-party
  clients later (not locked to one frontend).
- JWT-based auth keeps each user's data private and secure.
- Offloading recommendation logic to an LLM (Gemini) avoids having to
  hand-build a rules engine for fitness advice.

## Brainstormed Future Extensions
- Nutrition tracking
- BMI calculation
- Wearable device integration
- Workout reminders
- Fitness analytics dashboards
