---
title: BSV Wallet Derivation Paths and where to find them
date: 2020-08-31
layout: article
---
If you are new to BitcoinSV like I am, I've had to learn the mechanics of wallets.

You might have been asked to keep a copy of your BSV wallet's secret 12-word mnemonic, also called your BIP39 words. The 12 words are a human readable version of your wallet's not-for-human-consumption private key. You should NEVER share your 12-words or your private key with anyone, because if someone has them, they can spend the stored value within that wallet.

But that's not all of a wallet. There is a *derivation path*. Technical explanations aside, you need both the 12 words and the derivation path to use a wallet anywhere.

When a wallet is generated, Different wallet apps use different default derivation paths. Restoring such a wallet to that same app will always work, as it assumes you're recovering a wallet that app generated. But all BSV wallets are actually created equally. You should be able to use a generic app to work with most common BSV bitcoin wallets, such as simply.cash or ElectrumSV.

## Default Derivation Paths for common BSV Wallets

* MoneyButton.io = `m/44'/0'/0'`
* RelayX.io = `m/44'/236'/0'`
* simply.cash = `m/44'/145'/0'`

The 44 here is a reference to [BIPS-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), and the second number is supposed to be [coin type](https://github.com/satoshilabs/slips/blob/master/slip-0044.md): 236 is BSV, and 145 is BCH and 0 is BTC, but that doesn't seem to be applied as a hard and fast rule.

I haven't found an easy way to discover a given wallet's derivation path if you didn't make it.

## Not all wallets are created equal

### HandCash

If you're using HandCash 2.0, HandCash are [apparently doing something a bit different in the name of security](https://medium.com/@handcash/introducing-the-worlds-first-2fa-backup-system-for-non-custodial-bitcoin-wallets-77bca84b6ea3), and explicitly say you cannot import your HandCash wallet into any other apps. They seem to have a proprietary way of using HD (hierarchical deterministic) keys, with the real value stored in a wallet within your root wallet. It seems anyone telling you the derivation path for your HandCash wallet is `m/0'` would be referring to an older HandCash 1.x wallet.

### Centbee

I'm told that Centbee's derivation path is `m/44'/0/0` and the passphrase is your 4 digit pin, but I have been unable to get this going.

## Where to from here

I don't know a whole lot about the ins-and-outs of BSV, Bitcoin, or Cryptocurrency in general. I wrote this article because I wanted to be able to get all my wallets into simplyCash so I can check their balances quickly. I wish simplyCash made switching between wallets easier.

If you have further insight to shine on what I've written, please contact me, I'd love to learn and chat! I'm [Juniper Skunktaur on Twetch](https://twetch.app/u/5675)! If you found this useful or interesting, [like or rebranch my Twetch about it](https://twetch.app/t/a903c0e0509e0e03741679a2859deed9db415923fed43de7cc96f64717997f08), and even use Twetch's `/pay @5675 $3` feature to throw me enough for a virtual coffee.

I'm also a beginner illustrator, and do art commissions! Hit me up if you're keen on a cheap fun PFP or whatever.
