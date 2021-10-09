


const scriptsInEvents = {

		async Game_es_Event26_Act3(runtime, localVars)
		{
			const soal = "contoh pertanyaan safkhdslk safsahlk saf";
			
			soalFrame.contentWindow.setSoal(soal);
		},

		async Game_es_Event29_Act1(runtime, localVars)
		{
			console.log(localVars.jawaban);
			console.log("jawaban diterima");
		},

		async Game_es_Event30_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score diterima")
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

