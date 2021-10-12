


const scriptsInEvents = {

		async Game_es_Event31_Act1(runtime, localVars)
		{
			sessionStorage.setItem("token", runtime.globalVars.token);
			sessionStorage.setItem("curPos", runtime.globalVars.curPos);
			sessionStorage.setItem("ApiBase", runtime.globalVars.baseUrl);
		},

		async Game_es_Event36_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score soal diterima")
		},

		async Game_es_Event38_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score jawaban diterima")
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

