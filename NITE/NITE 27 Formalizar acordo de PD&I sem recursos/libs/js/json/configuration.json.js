Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NITE] 27 Formalizar acordo de PD&I sem recursos","publishDate":"18/03/2022 10:30:13","pages":[{"id":"cc0a0dd3-7d17-4d79-9563-708c14f42a01","name":"[NITE] 27 Formalizar acordo de PD&I sem recursos","version":"1.0","author":"ariel","image":"files\\diagrams\\NITE]_27_Formalizar_acordo_de_PDI_sem_recursos.png","isSubprocessPage":false,"elements":[{"id":"7f810bd4-2a0d-4ff4-af48-b3324b33fcfe","name":"[NITE] 27 Formalizar acordo de PD&I sem recursos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":4376.2,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f55cc2f4-722c-449a-8a08-caa38ea2ec29","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADA: Plano de trabalho e documentos do checklist</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":162.0,"y":86.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3d1a6535-a0b1-471f-8c76-7df8b38c1542","name":"Abrir processo de acordo de pesquisa,  desenvolvimento e inovação (PD&I)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.5,"y":59.0}],"radius":0.0,"height":84.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d0f8d636-ccce-49ae-b16f-b0faa583a566","name":"Incluir documento 346 - Manifestação de interesse acordo PD&I","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":262.0,"y":193.0}],"radius":0.0,"height":73.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"356a6bb3-3b56-4d2a-ba10-a035560edba6","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":302.0,"y":326.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"170ab670-3627-40c2-859d-d96f484656ff","name":"[NITE] 26-01 Firmar acordo de confidencialidade ","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":448.0,"y":316.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/NITE/NITE%2026%20Formalizar%20acordo%20de%20PD&I%20com%20recursos/#diagram/dae62c06-786f-4a3d-8c82-435a4119d137","type":"url"}},{"id":"097b0d01-0ed5-4921-b75d-1a2ea98f2a1c","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":302.0,"y":429.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Necessita de documentos complementares?","elementType":"SequenceFlow","properties":[]}]},{"id":"6d276564-f599-4860-afc6-d4a2eb0c1edd","name":"Necessita de documentos complementares?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":302.0,"y":536.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"27a879d2-dc5f-4fe1-84ae-fec58d97a36b","name":"Incluir em PDF documentos complementares","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":440.0,"y":526.0}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e533dc11-dc21-4f1a-a7f2-8bac175663e5","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":302.0,"y":644.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Possui plano de trabalho?","elementType":"SequenceFlow","properties":[]}]},{"id":"1eb97cd7-096f-46d0-bf61-dd11bd3f9437","name":"Possui plano de trabalho?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":302.0,"y":744.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"8321b490-506e-4feb-83ed-4ddc3a4028e8","name":"Avaliar documentos encaminhados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":277.0,"y":935.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c10f85d1-dc69-428c-a49c-3d3715107553","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":268.0,"y":1045.0}],"radius":0.0,"height":69.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0dbf7259-3824-46e3-98ae-74afee1270a1","name":"Incluir documento 347 - Plano de Trabalho PD&I","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":471.0,"y":729.5}],"radius":0.0,"height":69.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9825227-1b69-42e9-ae41-3da68791db7a","name":"Avaliar plano de trabalho e documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":483.0,"y":936.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"78ae946b-b595-4943-85a5-70bd2aefa538","name":"Plano de trabalho e documentação  adequados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":508.0,"y":1064.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"324b4119-dbb6-465b-bee5-d228f3274ab3","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":661.0,"y":1051.0}],"radius":0.0,"height":66.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9dba05c-5008-45d2-a485-51f1fcd58f65","name":"Realizar os ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":671.0,"y":734.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54611997-68b1-4c57-8abb-036cbab913f7","name":"Interessado anexou minuta de acordo próprio?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":508.5,"y":1201.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1c1c95f7-270b-41e1-bd3b-d75746b12824","name":"Incluir documento 348 - Acordo de PD&I","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":478.000122,"y":1336.0}],"radius":0.0,"height":71.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"19b4a7f0-4012-4f4d-a047-2764513fc1eb","name":"Encaminhar acordo para ciência do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":475.0,"y":1456.0}],"radius":0.0,"height":77.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"279366b4-b542-4c0f-bf47-136072268694","name":"Aguardar e-mail de resposta do interessado","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":513.0,"y":1601.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f7c53d8a-467c-4d91-ae2c-f137439f480b","name":"Incluir em PDF e-mail de resposta do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":479.5,"y":1698.0}],"radius":0.0,"height":75.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fd937ac-b046-48ec-82b2-3a3268dfe5d8","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":508.0,"y":1838.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"232bfd97-50ef-4223-a75a-1ff2eb2f3c0d","name":"Realizar ajustes na minuta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":651.0,"y":1828.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0b2182e0-c5e1-4d1c-a40d-92de6a2462c6","name":"Analisar minuta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":770.0,"y":1575.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3ba9e9ac-1978-4c80-be26-641cfd5267a3","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":477.5,"y":1962.0}],"radius":0.0,"height":69.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8be81cad-c37f-4b19-86d2-452edc9e8fd6","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":475.0,"y":2298.0}],"radius":0.0,"height":62.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"deee82dd-e210-41c5-93a3-332e4ec22115","name":"Analisar instrução processual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":2649.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0fc5545e-3a19-461c-8289-0ef75a9e3c34","name":"Não","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":509.0,"y":2799.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Incluir em PDF documentos complementares","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"41df9c0e-7bda-4b23-b1bd-f9a63cc5eee7","name":"Incluir em PDF documentos complementares","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":481.000061,"y":2934.0}],"radius":0.0,"height":73.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7ab8707e-0e4c-4012-b5c8-441d58b047a6","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":473.0,"y":3067.0}],"radius":0.0,"height":71.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"71bcaf29-eceb-411d-bc44-fbbed414fe1c","name":"Analisar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.5,"y":3372.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68dc5cd0-eca8-4308-a696-161714d465a5","name":"Processo adequado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":509.5,"y":3503.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a3a3b713-0f30-43d6-94dc-50f9c58be683","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":473.0,"y":3611.0}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2d639f2-e5a2-42d4-8906-19c29118598e","name":"Analisar peça processual ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.5,"y":3877.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"668ba70c-cd53-4779-a872-be713786f7ce","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":617.0,"y":3874.0}],"radius":0.0,"height":66.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d4922877-4eae-4d39-9d37-8ec2549ea301","name":"Não","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":801.75,"y":3887.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Incluir documento 056 - Parecer procuradoria","elementType":"SequenceFlow","properties":[]}]},{"id":"52e115ea-c58d-4528-9d15-63e0e47f78c9","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":801.75,"y":3167.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Adequações apontadas são de competência do NITE? ","elementType":"SequenceFlow","properties":[]}]},{"id":"f8d632a7-01de-4430-b548-975d11f9de43","name":"Adequações apontadas são de competência do NITE? ","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":801.75,"y":3082.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"8bd7bbca-94ae-4884-ad6e-c6e30f94173a","name":"Incluir documento 872 - Despacho simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":765.25,"y":2783.5}],"radius":0.0,"height":71.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3c156883-a251-4958-a536-8e356d46eabd","name":"Realizar os ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":776.75,"y":2149.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7b05fcad-7dc0-434a-b353-3882a3dc7e0e","name":"Realizar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":651.0,"y":3072.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7688eee3-37fe-42f9-98f7-697500e13658","name":"Incluir documento 056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":777.75,"y":4110.2}],"radius":0.0,"height":67.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c0c7554-f74d-4ecb-8995-23d543fe93fd","name":"Analisar  parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1033.0,"y":3922.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff6938d1-8a21-4d50-a767-99c5f7b0fc9c","name":"Incluir documento 877 - Nota técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1029.0,"y":3789.0}],"radius":0.0,"height":73.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ca3fd35-e42f-45e2-860a-f3722eeedb17","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1383.0,"y":3163.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Aprovado com necessidade de correções","elementType":"SequenceFlow","properties":[]},{"name":"Aprovado sem necessidade de correções","elementType":"SequenceFlow","properties":[]},{"name":"Reprovado","elementType":"SequenceFlow","properties":[]}]},{"id":"23a76078-d419-4ff2-b814-4242b03fe0d8","name":"Incluir documento 872 -Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1352.00012,"y":2755.0}],"radius":0.0,"height":76.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39e6f4df-25ce-44e7-bcd9-53941621eace","name":"Ajustar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1358.0,"y":1715.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"01db4c63-e351-4258-af3a-72dc3912c3c7","name":"Verificar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1656.5,"y":2647.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"36e86c1b-f989-4873-b72a-50f1ceb8344b","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1681.5,"y":2773.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6ce2a632-b7aa-4ea7-8308-b144cba8b346","name":"Incluir documento 348 - Acordo de PD&I","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1649.0,"y":2935.0}],"radius":0.0,"height":80.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"03d20083-49c4-46aa-ab34-cde36fe27893","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2002.0,"y":2939.27563}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"47f2c274-01e1-4452-9cb8-0ad6bb3d90ff","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2007.0,"y":3425.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"8e31e239-2454-49f3-a6cb-d171a682f083","name":"Assinar documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1977.0,"y":2479.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1034d393-a40f-4bb3-8075-e2e93d5db5a9","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2154.0,"y":2937.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"6d87febf-1931-433c-a96e-33268dfe6cad","name":"Atualizar os controles internos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2282.0,"y":2927.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"67b6c17f-34c2-439f-b81e-9510b8bdeb5b","name":"Publicar extrato do documento de celebração de parceria no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2447.0,"y":2922.5}],"radius":0.0,"height":69.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8517e7b3-1e5b-4ed2-b41b-b7bdb07fa0e9","name":" Incluir em PDF comprovante de publicação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2620.0,"y":2918.0}],"radius":0.0,"height":76.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b78e2d53-a81b-4e05-8da2-649225620793","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2613.50024,"y":3059.0}],"radius":0.0,"height":81.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"617f2ce1-6e9e-4d36-bf12-51c86a1e6e42","name":"Incluir documento 872  - Despacho Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1112.0,"y":3151.0}],"radius":0.0,"height":64.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f46774c6-3615-499c-8696-0074a4e49e00","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1118.5,"y":3018.25}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b16deaba-461c-4d6f-b4ec-060f3b3bc766","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1118.5,"y":2307.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1154e6be-8b63-4fd2-8cef-bd0d59f4d557","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1118.5,"y":1428.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"29f7ea49-9cb2-436c-9010-c647b2126a6a","name":"[DIARQ] 01 Realizar  tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2819.0,"y":4271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"3956b7e9-a087-4146-ba7b-3a32bb358aad","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">1. Acordo de coopera&ccedil;&atilde;o t&eacute;cnica com gest&atilde;o administrativa e financeira de funda&ccedil;&atilde;o de apoio </span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2967.0,"y":4286.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e6656521-b631-4e6b-ad0e-6ea6081d23b9","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":624.0,"y":3484.50024}],"radius":0.0,"height":77.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"690ceb23-0dda-400e-9348-6c6a3f3a902c","name":"Interessado (Pesquisador interno da UFCSPA)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":870.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"90e621a8-2059-4d34-873f-383b815eda76","name":"NITE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":890.0}],"radius":0.0,"height":1350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"918eafba-d28d-4df7-9787-834459a6754e","name":"PROPPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2240.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0a79b6bf-33d4-4e9a-a8a5-7de5b3d68c60","name":"Parceiro","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2440.0}],"radius":0.0,"height":155.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a0c7418b-58d3-4af7-b6a4-8f1a33d96794","name":"CCPI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2595.8}],"radius":0.0,"height":745.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"07567a63-9170-4be5-a4e4-8a1be4042eda","name":"PROPLAN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":3341.0}],"radius":0.0,"height":388.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"465bece6-60af-456f-9aa3-775e692de45d","name":"ASSESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":3729.0}],"radius":0.0,"height":313.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"72021fee-9c11-46a2-9756-2e67bcb3504b","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":4042.2002}],"radius":0.0,"height":176.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"8d904afb-7f40-414e-948f-d97fe8c74eed","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":4218.5}],"radius":0.0,"height":177.7002,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"cc0a0dd3-7d17-4d79-9563-708c14f42a01","containerName":"[NITE] 27 Formalizar acordo de PD&I sem recursos","isSubprocess":false,"elements":[{"id":"7f810bd4-2a0d-4ff4-af48-b3324b33fcfe","value":"[NITE] 27 Formalizar acordo de PD&I sem recursos"},{"id":"690ceb23-0dda-400e-9348-6c6a3f3a902c","value":"Interessado (Pesquisador interno da UFCSPA)"},{"id":"90e621a8-2059-4d34-873f-383b815eda76","value":"NITE"},{"id":"918eafba-d28d-4df7-9787-834459a6754e","value":"PROPPG"},{"id":"0a79b6bf-33d4-4e9a-a8a5-7de5b3d68c60","value":"Parceiro"},{"id":"a0c7418b-58d3-4af7-b6a4-8f1a33d96794","value":"CCPI"},{"id":"07567a63-9170-4be5-a4e4-8a1be4042eda","value":"PROPLAN"},{"id":"465bece6-60af-456f-9aa3-775e692de45d","value":"ASSESP"},{"id":"72021fee-9c11-46a2-9756-2e67bcb3504b","value":"PFUFCSPA"},{"id":"8d904afb-7f40-414e-948f-d97fe8c74eed","value":"DIARQ"},{"id":"39e6f4df-25ce-44e7-bcd9-53941621eace","value":"Ajustar documentos"},{"id":"6d87febf-1931-433c-a96e-33268dfe6cad","value":"Atualizar os controles internos"},{"id":"67b6c17f-34c2-439f-b81e-9510b8bdeb5b","value":"Publicar extrato do documento de celebração de parceria no DOU"},{"id":"7c0c7554-f74d-4ecb-8995-23d543fe93fd","value":"Analisar  parecer"},{"id":"668ba70c-cd53-4779-a872-be713786f7ce","value":"Incluir documento 036 - Análise e deliberação"},{"id":"8bd7bbca-94ae-4884-ad6e-c6e30f94173a","value":"Incluir documento 872 - Despacho simples "},{"id":"01db4c63-e351-4258-af3a-72dc3912c3c7","value":"Verificar adequações"},{"id":"0fc5545e-3a19-461c-8289-0ef75a9e3c34","value":"Não"},{"id":"d4922877-4eae-4d39-9d37-8ec2549ea301","value":"Não"},{"id":"3956b7e9-a087-4146-ba7b-3a32bb358aad","value":""},{"id":"3c156883-a251-4958-a536-8e356d46eabd","value":"Realizar os ajustes necessários"},{"id":"deee82dd-e210-41c5-93a3-332e4ec22115","value":"Analisar instrução processual"},{"id":"c2d639f2-e5a2-42d4-8906-19c29118598e","value":"Analisar peça processual "},{"id":"7688eee3-37fe-42f9-98f7-697500e13658","value":"Incluir documento 056 - Parecer procuradoria"},{"id":"f55cc2f4-722c-449a-8a08-caa38ea2ec29","value":""},{"id":"8517e7b3-1e5b-4ed2-b41b-b7bdb07fa0e9","value":" Incluir em PDF comprovante de publicação no DOU"},{"id":"03d20083-49c4-46aa-ab34-cde36fe27893","value":""},{"id":"617f2ce1-6e9e-4d36-bf12-51c86a1e6e42","value":"Incluir documento 872  - Despacho Simples"},{"id":"6ce2a632-b7aa-4ea7-8308-b144cba8b346","value":"Incluir documento 348 - Acordo de PD&I"},{"id":"8e31e239-2454-49f3-a6cb-d171a682f083","value":"Assinar documento"},{"id":"36e86c1b-f989-4873-b72a-50f1ceb8344b","value":""},{"id":"1034d393-a40f-4bb3-8075-e2e93d5db5a9","value":""},{"id":"47f2c274-01e1-4452-9cb8-0ad6bb3d90ff","value":"Assinar documento em bloco"},{"id":"4ca3fd35-e42f-45e2-860a-f3722eeedb17","value":""},{"id":"23a76078-d419-4ff2-b814-4242b03fe0d8","value":"Incluir documento 872 -Despacho simples"},{"id":"8321b490-506e-4feb-83ed-4ddc3a4028e8","value":"Avaliar documentos encaminhados"},{"id":"1c1c95f7-270b-41e1-bd3b-d75746b12824","value":"Incluir documento 348 - Acordo de PD&I"},{"id":"8be81cad-c37f-4b19-86d2-452edc9e8fd6","value":"Incluir documento 191 - Parecer"},{"id":"d0f8d636-ccce-49ae-b16f-b0faa583a566","value":"Incluir documento 346 - Manifestação de interesse acordo PD&I"},{"id":"d9825227-1b69-42e9-ae41-3da68791db7a","value":"Avaliar plano de trabalho e documentos"},{"id":"78ae946b-b595-4943-85a5-70bd2aefa538","value":"Plano de trabalho e documentação  adequados?"},{"id":"d9dba05c-5008-45d2-a485-51f1fcd58f65","value":"Realizar os ajustes necessários"},{"id":"19b4a7f0-4012-4f4d-a047-2764513fc1eb","value":"Encaminhar acordo para ciência do interessado"},{"id":"6fd937ac-b046-48ec-82b2-3a3268dfe5d8","value":""},{"id":"0b2182e0-c5e1-4d1c-a40d-92de6a2462c6","value":"Analisar minuta"},{"id":"3ba9e9ac-1978-4c80-be26-641cfd5267a3","value":"Incluir documento 036 - Análise e deliberação"},{"id":"c10f85d1-dc69-428c-a49c-3d3715107553","value":"Incluir documento 872 - Despacho simples"},{"id":"0dbf7259-3824-46e3-98ae-74afee1270a1","value":"Incluir documento 347 - Plano de Trabalho PD&I"},{"id":"324b4119-dbb6-465b-bee5-d228f3274ab3","value":"Incluir documento 872 - Despacho simples"},{"id":"29f7ea49-9cb2-436c-9010-c647b2126a6a","value":"[DIARQ] 01 Realizar  tratamento arquivístico"},{"id":"356a6bb3-3b56-4d2a-ba10-a035560edba6","value":""},{"id":"170ab670-3627-40c2-859d-d96f484656ff","value":"[NITE] 26-01 Firmar acordo de confidencialidade "},{"id":"ff6938d1-8a21-4d50-a767-99c5f7b0fc9c","value":"Incluir documento 877 - Nota técnica"},{"id":"27a879d2-dc5f-4fe1-84ae-fec58d97a36b","value":"Incluir em PDF documentos complementares"},{"id":"1eb97cd7-096f-46d0-bf61-dd11bd3f9437","value":"Possui plano de trabalho?"},{"id":"54611997-68b1-4c57-8abb-036cbab913f7","value":"Interessado anexou minuta de acordo próprio?"},{"id":"41df9c0e-7bda-4b23-b1bd-f9a63cc5eee7","value":"Incluir em PDF documentos complementares"},{"id":"7ab8707e-0e4c-4012-b5c8-441d58b047a6","value":"Incluir documento 872 - Despacho simples"},{"id":"a3a3b713-0f30-43d6-94dc-50f9c58be683","value":"Incluir documento 872 - Despacho simples"},{"id":"68dc5cd0-eca8-4308-a696-161714d465a5","value":"Processo adequado?"},{"id":"b16deaba-461c-4d6f-b4ec-060f3b3bc766","value":"Dar ciência no processo"},{"id":"1154e6be-8b63-4fd2-8cef-bd0d59f4d557","value":"Dar ciência no processo"},{"id":"3d1a6535-a0b1-471f-8c76-7df8b38c1542","value":"Abrir processo de acordo de pesquisa,  desenvolvimento e inovação (PD&I)"},{"id":"6d276564-f599-4860-afc6-d4a2eb0c1edd","value":"Necessita de documentos complementares?"},{"id":"097b0d01-0ed5-4921-b75d-1a2ea98f2a1c","value":""},{"id":"e533dc11-dc21-4f1a-a7f2-8bac175663e5","value":""},{"id":"279366b4-b542-4c0f-bf47-136072268694","value":"Aguardar e-mail de resposta do interessado"},{"id":"f7c53d8a-467c-4d91-ae2c-f137439f480b","value":"Incluir em PDF e-mail de resposta do interessado"},{"id":"232bfd97-50ef-4223-a75a-1ff2eb2f3c0d","value":"Realizar ajustes na minuta"},{"id":"71bcaf29-eceb-411d-bc44-fbbed414fe1c","value":"Analisar processo"},{"id":"f8d632a7-01de-4430-b548-975d11f9de43","value":"Adequações apontadas são de competência do NITE? "},{"id":"e6656521-b631-4e6b-ad0e-6ea6081d23b9","value":"Incluir documento 872 - Despacho simples"},{"id":"7b05fcad-7dc0-434a-b353-3882a3dc7e0e","value":"Realizar adequações"},{"id":"52e115ea-c58d-4528-9d15-63e0e47f78c9","value":""},{"id":"f46774c6-3615-499c-8696-0074a4e49e00","value":"Comunicar interessado"},{"id":"b78e2d53-a81b-4e05-8da2-649225620793","value":"Incluir documento 872 - Despacho simples"},{"id":"9257963c-564a-4fd0-ae37-c616bce5cf2a"},{"id":"171b03d6-f626-45e4-bacc-f5d4bfc7bd37"},{"id":"bb8febc4-5270-4187-aab9-a900264a70ee"},{"id":"2e1d840c-c609-4260-8bc4-d10a7ec3a9d1"},{"id":"5df12409-a56b-4668-b5fe-59fe962b661c"},{"id":"4af56f9e-2e2b-401e-a05c-07500a29d67e"},{"id":"95d8108b-01b5-44ae-9462-55f07fd4d9ae"},{"id":"76f265cb-15e9-40be-82d0-b25c21643486"},{"id":"2b89a18a-68cb-497c-ba12-35ff24133fcc"},{"id":"bebc3732-07c7-40e7-b984-e93d77f8aabf"},{"id":"088cc0aa-fbaf-42e2-8a6d-8d4e0ef1b95e"},{"id":"bde5dabd-3c5a-47c7-bdb5-9c61768d333a"},{"id":"5f0b5419-66e9-4671-b144-3ea55530e193"},{"id":"b6f2e961-46ca-49e3-af77-62c2792b30a7"},{"id":"877dc8f6-83ff-40f9-ab87-04a2e5a3427e"},{"id":"db9d3299-6e40-408a-b752-16c44bc1a134"},{"id":"e4725bb0-b80d-45a5-826a-730d6ed17228"},{"id":"9c0431d9-4a65-45d7-80ed-6daa3f5d9ce6"},{"id":"59aef404-5963-47e9-915b-629150b2391a"},{"id":"4f56cfad-2434-4e99-90d7-01f1b3b3e18b"},{"id":"b62e8158-48ae-41ef-bb11-850100357d11"},{"id":"c4fed55a-7e78-41ba-85b2-6cde9701ca02"},{"id":"6e18a0fd-76ae-496f-8655-c7ec9fcb5454"},{"id":"af058998-fbe6-4032-a1c2-f70566e45a7d"},{"id":"88371ed9-8013-42ae-a1c6-177a9fb3dc9d"},{"id":"4fb6924c-42cf-4c33-a086-5414c9f46224"},{"id":"4aaa0f04-d39a-4299-bb1f-7a4690c32f84"},{"id":"36b78ace-9a19-4d5e-883f-98fbb12a5ab8"},{"id":"6184eaa0-1cfd-4165-b201-2b3125157684"},{"id":"ad55a876-e69f-4f1c-bac8-b509fe10064e"},{"id":"1e36ad9d-aeab-4ccc-a3e2-b91838da61cf"},{"id":"3c69cd54-b803-40f8-8d6a-d6dbe2bdb792"},{"id":"bbdbc606-798b-4a43-bfaa-7bac73ad8967"},{"id":"eba55058-24f9-41f4-89d2-d425f30b9b1a"},{"id":"f2ea67d5-6302-4b24-aa7d-f298fc5d15bb"},{"id":"e2a40dbb-4679-4f43-8acc-6068e44939ec"},{"id":"f0db1c3d-788e-4b67-a724-c0e85e35bade"},{"id":"fe41ef91-9e47-47b8-a577-26d9fc5a057f"}]}]}