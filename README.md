# Brain Firewall

How would a brain protection firewall work?

We have information filtering problem of the digital age.

I have no excellent solutions to this. However, I wrote a description of the problem and some very small scripts to help myself.

See the slides: Description: A brief description of online information flood problem. What could be the ideal solution? And very hacky scripts that try to take small steps.

## Very simple browser extension

Adds 10 second delay before showing a web page. See /slowlife-browser-extension/.

## Dim screen script

Start to dim screen away 18:00 o'clock.

```sh
sudo cp zen-dimmer-bin /usr/local/bin/
sudo chmod +x /usr/local/bin/zen-dimmer-bin
```

```sh
crontab -e
# Add this line
*/15 * * * * bash /usr/local/bin/zen-dimmer-bin
```

## Safe Internet DNS filtering

Check this repository: [Safe Internet DNS filtering](https://github.com/juhanurmi/safe-internet-blocklist)

Example how to block some malware, spyware, user tracking, stupid or otherwise harmful content.

This is for yourself if you need to limit some harmful sites. Your rules so feel free to edit.

```sh
$ wc -l /etc/hosts
75638 /etc/hosts
$ grep -c "facebook" /etc/hosts
746
$ grep -c "twitter" /etc/hosts
70
```
