


const scriptsInEvents = {

		async EventSheet1_Event33_Act3(runtime, localVars)
		{
			parent.c3_callFunction("sendScore", [runtime.globalVars.score]);
			console.log(runtime.globalVars.score + " dikirim");
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

