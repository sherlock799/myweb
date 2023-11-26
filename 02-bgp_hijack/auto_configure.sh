#!/bin/bash
# the use:user group of updates/logs should be frr:frr
sudo chown frr:frr ./updates 
sudo chown frr:frr ./logs

cur_dir=`pwd`
sed -i "s|pwdtemplate|$cur_dir|g" conf/bgpd-S1.conf
sed -i "s|pwdtemplate|$cur_dir|g" conf/bgpd-S2.conf
sed -i "s|pwdtemplate|$cur_dir|g" conf/bgpd-S3.conf
sed -i "s|pwdtemplate|$cur_dir|g" conf/bgpd-S4.conf