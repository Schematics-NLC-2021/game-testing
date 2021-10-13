


const scriptsInEvents = {

		async Game_es_Event31_Act1(runtime, localVars)
		{
			sessionStorage.setItem("token", runtime.globalVars.token);
			sessionStorage.setItem("curPos", runtime.globalVars.curPos);
			sessionStorage.setItem("apiBase", runtime.globalVars.baseUrl);
			sessionStorage.setItem("team_id", runtime.globalVars.id_team);
		},

		async Game_es_Event36_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score soal diterima")
		},

		async Game_es_Event39_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score game diterima")
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

