(function(){
const WORD_ROWS = [
['substantial','/səbˈstænʃəl/','adj.','大量的；实质性的','substantial evidence','There is substantial evidence that sleep improves memory.','阅读'],
['controversial','/ˌkɒntrəˈvɜːʃəl/','adj.','有争议的','a controversial issue','The proposal remains highly controversial among researchers.','阅读'],
['inevitable','/ɪnˈevɪtəbəl/','adj.','不可避免的','an inevitable consequence','Some degree of change is inevitable.','阅读'],
['prevalent','/ˈprevələnt/','adj.','普遍存在的；盛行的','widely prevalent','Stress is increasingly prevalent among college students.','阅读'],
['intricate','/ˈɪntrɪkət/','adj.','错综复杂的','an intricate system','The brain is an intricate network of connections.','阅读'],
['plausible','/ˈplɔːzəbəl/','adj.','貌似合理的','a plausible explanation','Scientists offered a plausible explanation for the result.','阅读'],
['deteriorate','/dɪˈtɪəriəreɪt/','v.','恶化；退化','deteriorate rapidly','Air quality may deteriorate during the winter.','阅读'],
['contemplate','/ˈkɒntəmpleɪt/','v.','深思；考虑','contemplate doing','Many graduates contemplate working abroad.','阅读'],
['undermine','/ˌʌndəˈmaɪn/','v.','逐渐削弱','undermine confidence','Constant criticism can undermine a child’s confidence.','阅读'],
['facilitate','/fəˈsɪlɪteɪt/','v.','促进；使便利','facilitate learning','Technology can facilitate communication across cultures.','阅读'],
['adverse','/ˈædvɜːs/','adj.','不利的；有害的','adverse effects','The policy may have adverse effects on small firms.','阅读'],
['vulnerable','/ˈvʌlnərəbəl/','adj.','脆弱的；易受伤害的','be vulnerable to','Coastal cities are vulnerable to rising sea levels.','阅读'],
['empirical','/ɪmˈpɪrɪkəl/','adj.','以实验为依据的','empirical evidence','The claim is supported by empirical evidence.','阅读'],
['allocate','/ˈæləkeɪt/','v.','分配','allocate resources','Schools must allocate resources more efficiently.','阅读'],
['incentive','/ɪnˈsentɪv/','n.','激励；刺激','financial incentive','The scheme gives firms an incentive to cut waste.','阅读'],
['constraint','/kənˈstreɪnt/','n.','限制；约束','budget constraints','Time constraints forced the team to simplify the design.','阅读'],
['paradox','/ˈpærədɒks/','n.','悖论；自相矛盾的情况','a curious paradox','It is a paradox that more choice can cause more anxiety.','阅读'],
['resilient','/rɪˈzɪliənt/','adj.','有韧性的；能复原的','a resilient community','Resilient communities recover faster after disasters.','阅读'],
['discrepancy','/dɪˈskrepənsi/','n.','差异；不一致','a discrepancy between','There is a discrepancy between the two reports.','阅读'],
['scrutinize','/ˈskruːtənaɪz/','v.','仔细检查','scrutinize the data','Reviewers scrutinized the data before publication.','阅读'],
['consecutive','/kənˈsekjətɪv/','adj.','连续的','consecutive years','Sales declined for three consecutive years.','阅读'],
['exacerbate','/ɪɡˈzæsəbeɪt/','v.','使恶化','exacerbate inequality','Unequal access may exacerbate social inequality.','阅读'],
['unprecedented','/ʌnˈpresɪdentɪd/','adj.','前所未有的','unprecedented growth','The city has experienced unprecedented growth.','阅读'],
['ambiguous','/æmˈbɪɡjuəs/','adj.','模棱两可的','an ambiguous statement','The wording of the question is ambiguous.','阅读'],
['attain','/əˈteɪn/','v.','达到；获得','attain a goal','Few people attain expertise without sustained practice.','阅读'],
['coherent','/kəʊˈhɪərənt/','adj.','连贯的；一致的','a coherent argument','A good essay presents a coherent argument.','写作'],
['compelling','/kəmˈpelɪŋ/','adj.','令人信服的；引人注目的','compelling evidence','The author provides compelling evidence for reform.','写作'],
['predominantly','/prɪˈdɒmɪnəntli/','adv.','主要地；占主导地','predominantly rural','The region remains predominantly rural.','写作'],
['accordingly','/əˈkɔːdɪŋli/','adv.','因此；相应地','act accordingly','Demand has changed, and businesses must adapt accordingly.','写作'],
['notwithstanding','/ˌnɒtwɪθˈstændɪŋ/','prep.','尽管','notwithstanding the risks','Notwithstanding these risks, the plan deserves consideration.','写作'],
['advocate','/ˈædvəkeɪt/','v.','拥护；提倡','advocate reform','Many educators advocate smaller class sizes.','写作'],
['alleviate','/əˈliːvieɪt/','v.','缓解','alleviate pressure','Flexible schedules may alleviate workplace pressure.','写作'],
['indispensable','/ˌɪndɪˈspensəbəl/','adj.','不可或缺的','be indispensable to','Trust is indispensable to effective teamwork.','写作'],
['profound','/prəˈfaʊnd/','adj.','深远的；深刻的','a profound impact','Digital media has had a profound impact on education.','写作'],
['sustainable','/səˈsteɪnəbəl/','adj.','可持续的','sustainable development','Cities need a more sustainable transport system.','写作'],
['accountability','/əˌkaʊntəˈbɪləti/','n.','责任制；问责','public accountability','Transparency strengthens public accountability.','写作'],
['perspective','/pəˈspektɪv/','n.','观点；视角','from a broader perspective','From a broader perspective, the change benefits society.','写作'],
['priority','/praɪˈɒrəti/','n.','优先事项','give priority to','Governments should give priority to public health.','写作'],
['initiative','/ɪˈnɪʃətɪv/','n.','倡议；主动性','launch an initiative','The university launched an energy-saving initiative.','写作'],
['implement','/ˈɪmplɪment/','v.','实施；执行','implement a policy','The policy must be implemented consistently.','写作'],
['constitute','/ˈkɒnstɪtjuːt/','v.','构成；组成','constitute a threat','Misinformation can constitute a threat to public trust.','写作'],
['justify','/ˈdʒʌstɪfaɪ/','v.','证明……合理','justify the expense','The long-term benefits justify the initial expense.','写作'],
['reinforce','/ˌriːɪnˈfɔːs/','v.','加强；巩固','reinforce the idea','Daily practice reinforces what you have learned.','写作'],
['consensus','/kənˈsensəs/','n.','共识','reach a consensus','The committee failed to reach a consensus.','听力'],
['commute','/kəˈmjuːt/','v.','通勤','commute to work','She commutes to work by train every day.','听力'],
['mandatory','/ˈmændətəri/','adj.','强制的；必修的','mandatory training','Safety training is mandatory for all employees.','听力'],
['eligible','/ˈelɪdʒəbəl/','adj.','符合资格的','be eligible for','Full-time students are eligible for a discount.','听力'],
['postpone','/pəˈspəʊn/','v.','推迟','postpone the meeting','They decided to postpone the meeting until Friday.','听力'],
['venue','/ˈvenjuː/','n.','场地；会场','conference venue','The hotel is the venue for this year’s conference.','听力'],
['reservation','/ˌrezəˈveɪʃən/','n.','预订；保留意见','make a reservation','I would like to make a reservation for two.','听力'],
['reimburse','/ˌriːɪmˈbɜːs/','v.','偿还；报销','reimburse expenses','The company will reimburse your travel expenses.','听力'],
['orientation','/ˌɔːriənˈteɪʃən/','n.','迎新说明会；方向','orientation session','New students must attend the orientation session.','听力'],
['assignment','/əˈsaɪnmənt/','n.','作业；任务','submit an assignment','The assignment is due at the end of the week.','听力'],
['qualification','/ˌkwɒlɪfɪˈkeɪʃən/','n.','资格；资历','professional qualification','This role requires a professional qualification.','听力'],
['accommodation','/əˌkɒməˈdeɪʃən/','n.','住宿','student accommodation','Affordable student accommodation is limited.','听力'],
['maintenance','/ˈmeɪntənəns/','n.','维护；保养','routine maintenance','The lift is closed for routine maintenance.','听力'],
['compensation','/ˌkɒmpenˈseɪʃən/','n.','补偿；赔偿','claim compensation','Passengers can claim compensation for the delay.','听力'],
['curriculum','/kəˈrɪkjələm/','n.','课程体系','school curriculum','Financial literacy should be part of the school curriculum.','听力'],
['negotiate','/nɪˈɡəʊʃieɪt/','v.','谈判；协商','negotiate a contract','The two sides are negotiating a new contract.','听力'],
['supervise','/ˈsuːpəvaɪz/','v.','监督；指导','supervise a project','A senior researcher will supervise the project.','听力'],
['heritage','/ˈherɪtɪdʒ/','n.','遗产；传统','cultural heritage','The town is famous for its cultural heritage.','翻译'],
['prosperity','/prɒˈsperəti/','n.','繁荣','economic prosperity','Innovation contributes to long-term prosperity.','翻译'],
['revitalize','/ˌriːˈvaɪtəlaɪz/','v.','使恢复活力','revitalize rural areas','Tourism can help revitalize rural areas.','翻译'],
['craftsmanship','/ˈkrɑːftsmənʃɪp/','n.','工艺；手艺','traditional craftsmanship','Traditional craftsmanship is passed down through generations.','翻译'],
['diversity','/daɪˈvɜːsəti/','n.','多样性','cultural diversity','The festival celebrates the nation’s cultural diversity.','翻译'],
['urbanization','/ˌɜːbənaɪˈzeɪʃən/','n.','城市化','rapid urbanization','Rapid urbanization has transformed daily life.','翻译'],
['infrastructure','/ˈɪnfrəstrʌktʃə/','n.','基础设施','public infrastructure','The city invested heavily in public infrastructure.','翻译'],
['preservation','/ˌprezəˈveɪʃən/','n.','保护；保存','heritage preservation','Local residents support heritage preservation.','翻译'],
['civilization','/ˌsɪvəlaɪˈzeɪʃən/','n.','文明','ancient civilization','The museum traces the history of an ancient civilization.','翻译'],
['innovation','/ˌɪnəˈveɪʃən/','n.','创新','technological innovation','Technological innovation is reshaping manufacturing.','翻译'],
['ecological','/ˌiːkəˈlɒdʒɪkəl/','adj.','生态的','ecological protection','The region places great value on ecological protection.','翻译'],
['conservation','/ˌkɒnsəˈveɪʃən/','n.','保护；节约','energy conservation','Energy conservation begins with small daily choices.','翻译'],
['inherit','/ɪnˈherɪt/','v.','继承；承袭','inherit a tradition','Young artisans inherit the tradition and renew it.','翻译'],
['integration','/ˌɪntɪˈɡreɪʃən/','n.','融合；一体化','cultural integration','Public spaces encourage cultural integration.','翻译'],
['well-being','/ˌwel ˈbiːɪŋ/','n.','幸福；福祉','improve well-being','Green spaces improve residents’ well-being.','翻译'],
['household','/ˈhaʊshəʊld/','n.','家庭；住户','household income','Average household income has steadily increased.','翻译'],
['agriculture','/ˈæɡrɪkʌltʃə/','n.','农业','modern agriculture','Digital tools are changing modern agriculture.','翻译'],
['landmark','/ˈlændmɑːk/','n.','地标；里程碑','historic landmark','The bridge has become a historic landmark.','翻译'],
['community','/kəˈmjuːnəti/','n.','社区；群体','local community','The project created jobs for the local community.','翻译'],
['accessible','/əkˈsesəbəl/','adj.','可获得的；易使用的','be accessible to','Public services should be accessible to everyone.','翻译'],
['transform','/trænsˈfɔːm/','v.','改变；转型','transform the economy','New industries are helping transform the local economy.','翻译'],
['dedicate','/ˈdedɪkeɪt/','v.','致力于；献给','be dedicated to','Many volunteers are dedicated to protecting wildlife.','翻译']
];
if(window.SHICI_DATA_ONLY){window.SHICI_WORD_ROWS=WORD_ROWS}else{
const WORDS=WORD_ROWS.map((w,i)=>({id:i+1,word:w[0],phonetic:w[1],pos:w[2],meaning:w[3],collocation:w[4],example:w[5],topic:w[6]}));
const INTERVALS=[10,1440,2880,5760,10080,21600,43200],STORAGE_KEY='shici_cet6_v1';
const defaultState=()=>({version:1,goal:20,progress:{},history:[],activeDays:[],createdAt:Date.now()});
let state=loadState(),queue=[],index=0,current=null,revealed=false,deferredInstall=null,activeTopic='全部';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function loadState(){try{const v=JSON.parse(localStorage.getItem(STORAGE_KEY));return v&&v.progress?{...defaultState(),...v}:defaultState()}catch{return defaultState()}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('.sync-pill').innerHTML='<i></i>已存于本机'}
function dayKey(ts=Date.now()){const d=new Date(ts);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function addMinutes(min){return Date.now()+min*60000}
function formatDue(ts){const diff=ts-Date.now();if(diff<=0)return '现在';if(diff<3600000)return `${Math.max(1,Math.round(diff/60000))} 分钟后`;if(diff<86400000)return `${Math.round(diff/3600000)} 小时后`;return `${Math.ceil(diff/86400000)} 天后`}
function getTodayHistory(){const key=dayKey();return state.history.filter(h=>dayKey(h.at)===key)}
function todayNewCount(){return new Set(getTodayHistory().filter(h=>h.wasNew).map(h=>h.id)).size}
function dueWords(){return WORDS.filter(w=>state.progress[w.id]&&state.progress[w.id].due<=Date.now()&&!state.progress[w.id].mastered)}
function unseenWords(){return WORDS.filter(w=>!state.progress[w.id])}
function buildQueue(){const due=dueWords(),remaining=Math.max(0,state.goal-todayNewCount()),fresh=unseenWords().slice(0,remaining);queue=[...due,...fresh.filter(w=>!due.some(d=>d.id===w.id))];index=0;current=queue[0]||null;renderCard()}
function renderDashboard(){const today=getTodayHistory();$('#todayDone').textContent=today.length;$('#dailyGoal').textContent=state.goal;$('#dueCount').textContent=dueWords().length;$('#streakCount').textContent=calcStreak();const future=Object.values(state.progress).filter(p=>p.due>Date.now()&&!p.mastered).sort((a,b)=>a.due-b.due)[0];$('#nextReviewText').textContent=future?`下次 ${formatDue(future.due)}`:'今天状态轻盈';renderSchedule()}
function calcStreak(){const set=new Set(state.activeDays);let n=0;const d=new Date();d.setHours(0,0,0,0);if(!set.has(dayKey(d.getTime())))d.setDate(d.getDate()-1);while(set.has(dayKey(d.getTime()))){n++;d.setDate(d.getDate()-1)}return n}
function renderCard(){renderDashboard();revealed=false;$('#wordCard').classList.remove('flipped');$('#ratingRow').hidden=true;$('#revealBtn').hidden=false;if(!current){showFinish();return}const p=state.progress[current.id];$('#cardMode').textContent=p?'REVIEW · 复习':'NEW · 新词';$('#sessionTitle').textContent=`今日第 ${index+1} 个词`;$('#sessionCounter').textContent=`${String(index+1).padStart(2,'0')} / ${String(queue.length).padStart(2,'0')}`;$('#sessionMeter').style.width=`${Math.max(4,(index/Math.max(1,queue.length))*100)}%`;$('#wordTopic').textContent=`${current.topic}常见`;$('#wordText').textContent=current.word;$('#wordPhonetic').textContent=current.phonetic;$('#wordPos').textContent=current.pos;$('#wordMeaning').textContent=current.meaning;$('#wordCollocation').textContent=current.collocation;$('#wordExample').textContent=current.example}
function reveal(){if(!current||revealed)return;revealed=true;$('#wordCard').classList.add('flipped');$('#ratingRow').hidden=false;$('#revealBtn').hidden=true}
function rate(rating){if(!current)return;const now=Date.now(),existing=state.progress[current.id],wasNew=!existing;let p=existing||{stage:-1,due:now,correct:0,wrong:0,seen:0,mastered:false},min;if(rating==='again'){p.stage=0;min=10;p.wrong++}else if(rating==='hard'){p.stage=Math.max(0,p.stage);min=Math.max(10,Math.round(INTERVALS[p.stage]*.6));p.correct++}else if(rating==='good'){p.stage=Math.min(6,p.stage+1);min=INTERVALS[p.stage];p.correct++}else{p.stage=Math.min(6,p.stage+2);min=INTERVALS[p.stage];p.correct++}p.seen++;p.last=now;p.due=addMinutes(min);p.mastered=p.stage>=6&&rating!=='again';state.progress[current.id]=p;state.history.push({id:current.id,at:now,rating,wasNew});if(state.history.length>3000)state.history=state.history.slice(-3000);const key=dayKey();if(!state.activeDays.includes(key))state.activeDays.push(key);save();index++;current=queue[index]||null;renderCard();renderLibrary();renderProgress()}
function showFinish(){const done=getTodayHistory().length;if(done>0){$('#finishSummary').textContent=`今天完成 ${done} 个词次。下一次复习会在记忆开始下降前出现。`;if(!$('#finishDialog').open)$('#finishDialog').showModal()}else{$('#sessionTitle').textContent='今天的任务已完成';$('#sessionCounter').textContent='✓';$('#wordText').textContent='Well done!';$('#wordPhonetic').textContent='去记忆轨迹看看你的进步';$('#wordTopic').textContent='今日完成';$('#revealBtn').hidden=true;$('#sessionMeter').style.width='100%'}}
function speak(text){if(!('speechSynthesis'in window)){toast('当前浏览器不支持朗读');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.88;speechSynthesis.speak(u)}
function renderSchedule(){const stages=['10 分钟','1 天','2 天','4 天','7 天'],active=current&&state.progress[current.id]?state.progress[current.id].stage:0;$('#scheduleList').innerHTML=stages.map((s,i)=>`<li class="${i===active?'current':''}"><i>${i+1}</i><b>${s}</b><span>${i<active?'已完成':i===active?'当前阶段':'待解锁'}</span></li>`).join('')}
function renderLibrary(){const q=$('#wordSearch').value.trim().toLowerCase(),list=WORDS.filter(w=>(activeTopic==='全部'||w.topic===activeTopic)&&(!q||[w.word,w.meaning,w.collocation].join(' ').toLowerCase().includes(q)));$('#libraryCount').textContent=`收录 ${WORDS.length} 个核心高频词 · 当前显示 ${list.length} 个`;$('#wordGrid').innerHTML=list.map(w=>{const p=state.progress[w.id],status=!p?['未学习','']:p.mastered?['已掌握','mastered']:['记忆中','learning'];return `<article class="word-item"><div class="row"><span class="kicker">${w.topic}</span><span class="status-dot ${status[1]}">${status[0]}</span></div><h3>${w.word}</h3><p>${w.pos} ${w.meaning}</p><small>${w.collocation}</small></article>`}).join('')||'<div class="empty-state">没有找到匹配的词，换个关键词试试。</div>'}
function renderProgress(){const ps=Object.values(state.progress),mastered=ps.filter(p=>p.mastered).length,totalCorrect=ps.reduce((s,p)=>s+p.correct,0),total=ps.reduce((s,p)=>s+p.correct+p.wrong,0),retention=total?Math.round(totalCorrect/total*100):0;$('#retentionRate').textContent=total?`${retention}%`:'—';$('#masteredCount').textContent=mastered;$('#masteryRing').style.background=`conic-gradient(var(--lime) ${mastered/WORDS.length*360}deg,#304057 0deg)`;const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=dayKey(d);days.push({label:i===0?'今天':`${d.getMonth()+1}/${d.getDate()}`,count:state.history.filter(h=>dayKey(h.at)===k).length,today:i===0})}const max=Math.max(1,...days.map(d=>d.count));$('#weekBars').innerHTML=days.map(d=>`<div class="bar-col ${d.today?'today':''}" title="${d.count} 个"><i style="height:${Math.max(3,d.count/max*165)}px"></i><small>${d.label}</small></div>`).join('');const counts=[0,0,0,0];ps.forEach(p=>{if(p.mastered)counts[3]++;else if(p.stage<=1)counts[0]++;else if(p.stage<=3)counts[1]++;else counts[2]++});const labels=['初识','加固','熟悉','掌握'];$('#stageRows').innerHTML=labels.map((l,i)=>`<div class="stage-row"><div><span>${l}</span><b>${counts[i]}</b></div><i><b style="width:${ps.length?counts[i]/ps.length*100:0}%"></b></i></div>`).join('')}
function switchView(name){if(!['study','words','progress','settings'].includes(name))name='study';$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===name));$('#pageTitle').textContent={study:'今日学习',words:'高频词库',progress:'记忆轨迹',settings:'设置'}[name];history.replaceState(null,'',`#${name}`);if(name==='progress')renderProgress();if(name==='words')renderLibrary();window.scrollTo({top:0,behavior:'smooth'})}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),2200)}
function installApp(){if(deferredInstall){deferredInstall.prompt();deferredInstall.userChoice.finally(()=>deferredInstall=null);return}const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);$('#installGuide').innerHTML=isiOS?'<ol><li>点击 Safari 底部的“分享”按钮。</li><li>向下滑，选择“添加到主屏幕”。</li><li>点击右上角“添加”。</li></ol>':'<p>打开浏览器菜单，选择“安装应用”或“添加到主屏幕”。如果没有看到该选项，请使用 Chrome、Edge 或 Safari 打开本页。</p>';$('#installDialog').showModal()}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`拾词备份-${dayKey()}.json`;a.click();URL.revokeObjectURL(a.href);toast('学习记录已导出')}
function importData(file){const reader=new FileReader();reader.onload=()=>{try{const v=JSON.parse(reader.result);if(!v||!v.progress||!Array.isArray(v.history))throw new Error();state={...defaultState(),...v};save();buildQueue();renderLibrary();renderProgress();$('#goalSelect').value=state.goal;toast('学习记录已恢复')}catch{toast('备份文件无法识别')}};reader.readAsText(file)}
function registerWebMCP(){const ctx=document.modelContext;if(!ctx?.registerTool)return;try{ctx.registerTool({name:'get_learning_summary',title:'查看六级学习概况',description:'读取当前设备上的六级词汇学习数量、待复习数量和连续学习天数。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>({learned:Object.keys(state.progress).length,mastered:Object.values(state.progress).filter(p=>p.mastered).length,due:dueWords().length,streak:calcStreak()})});ctx.registerTool({name:'record_current_word_memory',title:'记录当前单词记忆反馈',description:'为当前显示的单词记录记忆反馈并安排下一次复习。',inputSchema:{type:'object',properties:{rating:{type:'string',enum:['again','hard','good','easy']}},required:['rating'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:input=>{if(!current)throw new Error('当前没有待学习单词');if(!['again','hard','good','easy'].includes(input?.rating))throw new Error('无效的记忆反馈');const word=current.word;rate(input.rating);return{word,rating:input.rating,saved:true}}})}catch{}}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));$('#wordCard').addEventListener('click',reveal);$('#revealBtn').addEventListener('click',reveal);$('#speakBtn').addEventListener('click',e=>{e.stopPropagation();speak(current?.word||'')});$('#speakExample').addEventListener('click',e=>{e.stopPropagation();speak(current?.example||'')});$$('#ratingRow button').forEach(b=>b.addEventListener('click',()=>rate(b.dataset.rating)));document.addEventListener('keydown',e=>{if(e.code==='Space'&&current){e.preventDefault();reveal()}if(revealed&&['Digit1','Digit2','Digit3','Digit4'].includes(e.code))rate(['again','hard','good','easy'][Number(e.code.slice(-1))-1])});$('#wordSearch').addEventListener('input',renderLibrary);$$('#topicFilters button').forEach(b=>b.addEventListener('click',()=>{activeTopic=b.dataset.topic;$$('#topicFilters button').forEach(x=>x.classList.toggle('active',x===b));renderLibrary()}));$('#goalSelect').addEventListener('change',e=>{state.goal=Number(e.target.value);save();buildQueue();toast('每日新词目标已更新')});$('#installBtn').addEventListener('click',installApp);$('#installQuick').addEventListener('click',installApp);$('.dialog-close').addEventListener('click',()=>$('#installDialog').close());$('#exportBtn').addEventListener('click',exportData);$('#importBtn').addEventListener('click',()=>$('#importFile').click());$('#importFile').addEventListener('change',e=>e.target.files[0]&&importData(e.target.files[0]));$('#resetBtn').addEventListener('click',()=>$('#resetDialog').showModal());$('#cancelReset').addEventListener('click',()=>$('#resetDialog').close());$('#confirmReset').addEventListener('click',()=>{localStorage.removeItem(STORAGE_KEY);state=defaultState();$('#resetDialog').close();buildQueue();renderLibrary();renderProgress();toast('学习记录已清空')});$('#finishBtn').addEventListener('click',()=>{$('#finishDialog').close();switchView('progress')});window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e});
const now=new Date();$('#todayLabel').textContent=`${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 · ${['星期日','星期一','星期二','星期三','星期四','星期五','星期六'][now.getDay()]}`;$('#goalSelect').value=state.goal;buildQueue();renderLibrary();renderProgress();switchView(location.hash.slice(1)||'study');registerWebMCP();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
})();

