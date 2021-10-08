


const scriptsInEvents = {

		async EventSheet1_Event56_Act2(runtime, localVars)
		{
			parent.c3_callFunction("sendScore", [localVars.convertedScore]);
			console.log(localVars.convertedScore + " dikirim");
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

