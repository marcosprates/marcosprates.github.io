kpayload.elf - kernel payload, includes RPC server and fself/fpkg hooks (among other things)
payload.bin - payload loader, includes kernel patches
librpc.dll - C# code for using to jkpatch RPC
librpc.pdb - program debug file for librpc.dll

1. send payload.bin to ps4 on port 9020 (or what ever port your web loader uses)
2. send kpayload.elf to ps4 on port 9023
3. have fun with homebrew/rpc!

4.55 support!
golden <3