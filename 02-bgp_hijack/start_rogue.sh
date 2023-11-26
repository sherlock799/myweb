#!/bin/bash

echo "Killing any existing rogue AS"
./stop_rogue.sh

echo "Starting rogue AS"
/usr/lib/frr/zebra -f conf/zebra-S4.conf -d -i /tmp/zebra-S4.pid > logs/S4-zebra-stdout
/usr/lib/frr/bgpd -f conf/bgpd-S4.conf -d -i /tmp/bgpd-S4.pid > logs/S4-bgpd-stdout
