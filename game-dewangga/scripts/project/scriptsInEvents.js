


const scriptsInEvents = {

		async EventSheet1_Event40_Act1(runtime, localVars)
		{
			parent.c3_callFunction("sendScore", [runtime.globalVars.skor]);
			console.log(runtime.globalVars.skor + " dikirim");
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

