let det = document.getElementById('getdetails');


det.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();

        let selected = [];
        for(let option of document.getElementById('parameter').options)
        {
            if (option.selected) {
                let temp=new Array(2);
                temp[0]=option.value;
                temp[1]=document.getElementById('value').value;
                selected.push(temp);
            }
        }
        let response = await fetch('http://localhost:8090/configuration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                
            },

        body: JSON.stringify({
            algorithm: document.getElementById('algorithm').value,
            schemaPath: document.getElementById('schemaPath').value,
            datasetPath: document.getElementById('datasetPath').value,
            parameters: Object.assign({}, selected),
            configurationName: document.getElementById('configurationName').value,
            outputFileName: document.getElementById('outputFileName').value
        })
    });
    });




