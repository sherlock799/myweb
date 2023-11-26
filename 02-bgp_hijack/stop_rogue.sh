#!/bin/bash

pgrep -f zebra-S4 | sudo xargs kill -9
pgrep -f bgpd-S4 | sudo xargs kill -9
