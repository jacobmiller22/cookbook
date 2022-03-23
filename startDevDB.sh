#!/bin/bash
pscale connect --port 3302 cookbook main &
pscale connect --port 3301 cookbook shadow &