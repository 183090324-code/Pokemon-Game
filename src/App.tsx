import React, { useState } from 'react';
import { DialogBox } from './components/DialogBox';
import { TownScene } from './components/TownScene';
import { SkillBar } from './components/SkillBar';
import { MiniGame } from './components/MiniGame';
import { AvatarSprite, CharmanderSprite, MagikarpSprite, PsyduckSprite, PonytaSprite, TrainerSprite, PikachuSprite, SnorlaxSprite, JigglypuffSprite } from './components/Sprites';
import { playLevelUp, playSaveMusic } from './utils/audio';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [gameState, setGameState] = useState<'intro' | 'evolving' | 'main' | 'minigame'>('intro');
  const [dialogSpeaker, setDialogSpeaker] = useState("旁白");
  const [dialogText, setDialogText] = useState("野生的 [野心家 LEI] 出现了！\n点击屏幕开始见证进化...");
  
  const [skills, setSkills] = useState({
      spatial: 90,
      ai: 20,
      comm: 30,
      business: 40
  });
  const [easterEgg, setEasterEgg] = useState<string | null>(null);
  
  const handleIntroClick = () => {
      setDialogSpeaker("系统");
      setDialogText("LEI 正在光速进化为‘全能野心家’！");
      setGameState('evolving');
      playLevelUp();
      
      setTimeout(() => {
          setGameState('main');
          setDialogSpeaker("LEI");
          setDialogText("技能点已拉满！\n欢迎探索我的移动端职场大陆。");
      }, 4000);
  };

  const handleBaiduClick = () => {
    setDialogSpeaker("LEI (百度副本)");
    setDialogText("对接 70+ 作者，建立 AI 答疑！\n战胜提效挑战，AI 能力大幅提升！");
    playLevelUp();
    setSkills({ ai: 90, comm: 70, business: 85, spatial: 60 });
  }

  const handleLongforClick = () => {
    setDialogSpeaker("LEI (龙湖副本)");
    setDialogText("独立管理出租 120 间公寓！\n达成销冠成就，业务敏锐度与沟通爆发！");
    playLevelUp();
    setSkills({ ai: 50, comm: 90, business: 95, spatial: 75 });
  }

  const handleSceneClickGlobal = () => {
    setDialogSpeaker("系统提示");
    setDialogText("进入了野生宝可梦保护区...\n尝试点击出现的角色和宝可梦！");
  }

  const handleFisuClick = () => {
    setDialogSpeaker("LEI (大运会副本)");
    setDialogText("7 场活动礼仪服务，双语对接外媒！\n完成世界级考验，沟通能力达到 MAX！");
    playLevelUp();
    setSkills({ ai: 60, comm: 99, business: 80, spatial: 70 });
  }

  const handleSaveClick = () => {
    setDialogSpeaker("系统");
    setDialogText("进度已存档！\n请关注后续个人简历下发。");
    playSaveMusic();
  }

  const renderContent = () => {
    if (gameState === 'minigame') {
        return <MiniGame onExit={() => { setGameState('main'); setDialogSpeaker("系统"); setDialogText("挑战结束，已返回主菜单！"); }} />;
    }

    if (gameState === 'intro' || gameState === 'evolving') {
        return (
            <div className="flex flex-col items-center justify-between h-full w-full bg-[#82B1FF] cursor-pointer relative" onClick={gameState === 'intro' ? handleIntroClick : undefined}>
                {/* Sun and Clouds Background */}
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute top-10 right-10 text-5xl">☀️</motion.div>
                <div className="flex-1 w-full flex flex-col items-center justify-center p-6 relative z-10">
                    <div className="bg-white/40 p-8 rounded-full border-4 border-[#222224] shadow-xl relative overflow-hidden backdrop-blur-sm aspect-square w-full max-w-[260px] flex items-center justify-center">
                        {gameState === 'intro' && (
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                <AvatarSprite className="w-32 h-44 drop-shadow-xl" />
                            </motion.div>
                        )}
                        {gameState === 'evolving' && (
                            <div className="relative">
                                <motion.div animate={{ opacity: [1, 0, 1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                                    <AvatarSprite className="w-32 h-44" />
                                </motion.div>
                                <motion.div animate={{ opacity: [0, 1, 0, 1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                                    <AvatarSprite className="w-32 h-44 filter drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" />
                                </motion.div>
                            </div>
                        )}
                    </div>
                    {gameState === 'intro' && <h1 className="text-xl font-black mt-8 text-[#222224] bg-[#FFCB05] px-6 py-2 border-[3px] border-[#222224] rounded-full drop-shadow-lg animate-pulse tracking-widest">LEI 专属副本 - 点击进入</h1>}
                </div>
                <div className="w-full shrink-0 p-4 pb-8 z-10">
                    <DialogBox text={dialogText} speaker={dialogSpeaker} />
                </div>
            </div>
        )
    }

    return (
      <div className="h-full w-full flex flex-col bg-[#F4F4F6]">
        
        {/* Scrollable Main Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-4">
            
            {/* Header Profile */}
            <div className="poke-container p-4 bg-white flex items-center gap-4 border-2 border-[#333] shadow-md rounded-xl">
                <div className="w-20 h-20 bg-gray-100 rounded-full border-2 border-[#222224] flex flex-col items-center justify-end overflow-hidden relative shrink-0">
                    <div className="absolute bottom-0 w-full h-[40%] bg-[#78C850]"></div>
                    <AvatarSprite className="w-full h-[120%] z-10 translate-y-1" isAnimating />
                </div>
                <div className="flex flex-col pl-2">
                    <h2 className="text-xl font-black text-[#FF6B6B] drop-shadow-sm leading-none tracking-widest">LEI LV.99</h2>
                    <p className="text-xs text-gray-500 font-black mt-1.5 bg-gray-100 px-2 py-0.5 rounded-sm self-start border border-gray-200 shadow-sm">👑 野心家</p>
                </div>
            </div>

            {/* Stats Area */}
            <div className="poke-container p-4 bg-white border-2 border-[#333] shadow-md rounded-xl">
                <h3 className="font-black text-xs uppercase mb-3 text-gray-500 border-b border-dashed border-gray-300 pb-1">⚡ 能力属性 (Stats)</h3>
                <div className="space-y-1">
                    <SkillBar label="AI应用能力" value={skills.ai} color="bg-[#4CAF50]" />
                    <SkillBar label="跨服沟通" value={skills.comm} color="bg-[#2196F3]" />
                    <SkillBar label="业务敏锐度" value={skills.business} color="bg-[#FF9800]" />
                    <SkillBar label="综合执行力" value={skills.spatial} color="bg-[#9C27B0]" />
                </div>
            </div>

            {/* Awards Area */}
            <div className="poke-container p-4 bg-white border-2 border-[#333] shadow-md rounded-xl">
                <h3 className="font-black text-xs uppercase mb-2 text-gray-500 border-b border-dashed border-gray-300 pb-1">🏆 奖项荣誉</h3>
                <ul className="text-xs space-y-2 list-disc list-outside pl-4 text-gray-800 marker:text-[#FF9800]">
                    <li className="font-bold leading-tight">河北工业大学校级奖学金</li>
                    <li className="font-bold leading-tight">“智慧人居与健康城市”研究竞赛二等奖</li>
                    <li className="font-bold leading-tight">成都锦城学院校级二等奖学金</li>
                    <li className="font-bold leading-tight">校级优秀团干</li>
                </ul>
            </div>

            {/* Title for Dungeons */}
            <div className="flex justify-between items-center mt-2">
                <div className="bg-[#222224] text-white px-2 py-1 text-[10px] rounded-sm uppercase tracking-wider font-bold">关卡载入：职场双线历险</div>
            </div>

            {/* Baidu Quest */}
            <div 
                className="bg-white cursor-pointer transition-colors p-4 border-2 border-[#555] rounded-xl shadow-md border-b-[6px] active:scale-[0.98] active:bg-gray-50"
                onClick={handleBaiduClick}
            >
                <div className="bg-[#E3F2FD] text-[#1565C0] text-[10px] px-2 py-0.5 rounded font-black inline-block mb-2">🎈 百度实习</div>
                <h3 className="text-[#2A52BE] text-base font-black mb-2 leading-tight">百度作者成长体系产品</h3>
                <ul className="text-[11px] space-y-1.5 text-gray-700 leading-relaxed font-bold list-outside list-disc pl-4 marker:text-gray-400">
                    <li>对接 70+ 百家号作者及社群</li>
                    <li>功能维护，发文量环比 <strong className="text-red-500">+15%</strong></li>
                    <li>构建社群 AI 答疑机器人，效率跃升 <strong className="text-red-500">65%</strong></li>
                </ul>
            </div>

            {/* Longfor Quest */}
            <div 
                className="bg-white cursor-pointer transition-colors p-4 border-2 border-[#555] rounded-xl shadow-md border-b-[6px] active:scale-[0.98] active:bg-gray-50"
                onClick={handleLongforClick}
            >
                <div className="bg-[#FFF3E0] text-[#E65100] text-[10px] px-2 py-0.5 rounded font-black inline-block mb-2">🏢 龙湖实习</div>
                <h3 className="text-[#2A52BE] text-base font-black mb-2 leading-tight">龙湖冠寓门店管理</h3>
                <ul className="text-[11px] space-y-1.5 text-gray-700 leading-relaxed font-bold list-outside list-disc pl-4 marker:text-gray-400">
                    <li>独立管理、出租门店 120 间公寓</li>
                    <li>实现月均出租率 <strong className="text-red-500">90%+</strong></li>
                    <li>解决突发情况，客户满意度达 <strong className="text-red-500">94%</strong></li>
                </ul>
            </div>

            {/* Town Scene (Replaced Pokemon Scene Quest) */}
            <TownScene 
                onClick={handleSceneClickGlobal} 
                onPokeClick={(name) => {
                    playSaveMusic();
                    if (name === 'pikachu') {
                        setDialogText("皮卡丘使用了十万伏特！\n业务执行力被全面激活！");
                        setSkills(s => ({...s, business: 99}));
                    } else if (name === 'charmander') {
                        setDialogText("野生的 小火龙 使用了火花！\n掉落经验糖果！");
                        setSkills(s => ({...s, ai: Math.min(s.ai + 5, 99)}));
                    }
                }} 
            />

            {/* World Quest (Fisu) */}
            <div 
                className="bg-[#FFF0F5] cursor-pointer transition-colors p-4 border-2 border-[#555] rounded-xl shadow-md border-b-[6px] active:scale-[0.98] active:bg-pink-50"
                onClick={handleFisuClick}
            >
                <div className="bg-[#FF4081] text-white text-[10px] px-2 py-0.5 rounded font-black inline-block mb-2 shadow-sm">🌍 社会实践</div>
                <h3 className="text-[#2A52BE] text-base font-black mb-2 leading-tight">第 31 届世界大学生夏季运动会</h3>
                <ul className="text-[11px] space-y-1.5 text-gray-700 leading-relaxed font-bold list-outside list-disc pl-4 marker:text-gray-400">
                  <li>负责国内外媒体记者的双语对接工作</li>
                  <li>在 7 场主题日活动中提供礼仪服务</li>
                  <li>完成活动物料的分类整理、中英文台账填报</li>
                </ul>
            </div>

            {/* Scrolling Footer Animation Row */}
            <div className="w-full bg-[#78C850] border-4 border-[#222224] rounded-xl relative shadow-inner flex flex-col justify-end mt-2 overflow-hidden">
                <div className="overflow-x-auto flex items-end [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 pb-1 pt-4 h-[65px] snap-x">
                    <div className="flex gap-10 items-end whitespace-nowrap min-w-max pr-8">
                        {/* Scene 1: Biker & Psyduck */}
                        <div className="flex items-end gap-2 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#FFCCCC" clothes="#333" hair="#FF8800" />
                            <PsyduckSprite className="w-6 h-6 mb-0.5" />
                        </div>
                        {/* Scene 2: Agatha & Ponyta */}
                        <div className="flex items-end gap-2 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#E6E6FA" clothes="#663399" hair="#CCC" />
                            <motion.div animate={{y: [0,-4,0]}} transition={{repeat:Infinity, duration:0.5}}><PonytaSprite className="w-8 h-8 mb-0.5" /></motion.div>
                        </div>
                        {/* Scene 3: Ash & Pikachu */}
                        <div className="flex items-end gap-2 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#FFE4C4" clothes="#ff5555" hair="#1E90FF" />
                            <motion.div animate={{y: [0,-4,0]}} transition={{repeat:Infinity, duration:0.3}}><PikachuSprite className="w-6 h-6 mb-0.5" /></motion.div>
                        </div>
                        {/* Scene 4: Guard chasing Charmander */}
                        <div className="flex items-end gap-3 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#D2B48C" clothes="#2255DD" extra="#FFFF00" />
                            <motion.div animate={{y: [0,-6,0]}} transition={{repeat:Infinity, duration:0.3}}><CharmanderSprite className="w-6 h-6 transform scale-x-[-1] mb-0.5" /></motion.div>
                        </div>
                        {/* Scene 5: Erika resting */}
                        <div className="flex items-end gap-1 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#FFE4E1" clothes="#98FB98" hair="#228B22" />
                            <MagikarpSprite className="w-6 h-6 mb-0" />
                        </div>
                        {/* Scene 6: Big guy with Snorlax */}
                        <div className="flex items-end gap-2 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#FFF" clothes="#444" hair="#222" />
                            <SnorlaxSprite className="w-10 h-10 mb-0" />
                        </div>
                        {/* Scene 7: Pink girl with Jigglypuff */}
                        <div className="flex items-end gap-2 snap-center">
                            <TrainerSprite className="w-8 h-8 transform scale-x-[-1]" skin="#FCE1CA" clothes="#FFB6C1" hair="#FF69B4" />
                            <JigglypuffSprite className="w-6 h-6 mb-0.5" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Fixed Bottom UI (Console / Navigation) */}
        <div className="bg-[#CFD8DC] border-t-[6px] border-[#333] p-3 flex flex-col gap-3 shrink-0 z-20 pb-safe">
            <div className="w-full relative h-[80px]">
                <DialogBox text={dialogText} speaker={dialogSpeaker} />
            </div>
            {/* Buttons row - Forced to one line */}
            <div className="flex justify-between gap-2 overflow-x-hidden pt-1">
                <button onClick={() => setGameState('minigame')} className="poke-button flex-1 px-1 py-2 text-center font-bold flex flex-col items-center justify-center gap-1 bg-[#FFD166] hover:bg-[#FFC107] border-[3px]">
                    <span className="text-[18px] leading-none block">🎮</span>
                    <span className="text-[10px] leading-none whitespace-nowrap overflow-visible">挑战小游戏</span>
                </button>
                <button onClick={() => { playLevelUp(); setDialogSpeaker("探索"); setDialogText("继续下滑发掘更多职场副本..."); }} className="poke-button flex-1 px-1 py-2 text-center font-bold flex flex-col items-center justify-center gap-1 border-[3px]">
                    <span className="text-[18px] leading-none block">🏃</span>
                    <span className="text-[10px] leading-none whitespace-nowrap overflow-visible">继续探索</span>
                </button>
                <button onClick={() => { setEasterEgg("✨掉落：面试直通卡！\n你的业务能力打动了面试官！"); playSaveMusic(); }} className="poke-button flex-1 px-1 py-2 text-center font-bold flex flex-col items-center justify-center gap-1 border-[3px]">
                    <span className="text-[18px] leading-none block">🥚</span>
                    <span className="text-[10px] leading-none whitespace-nowrap overflow-visible">隐藏掉落</span>
                </button>
                <button onClick={handleSaveClick} className="poke-button flex-1 px-1 py-2 text-center font-bold flex flex-col items-center justify-center gap-1 bg-[#222224] text-white hover:bg-[#333] border-[3px]">
                    <span className="text-[18px] leading-none block font-normal">📥</span>
                    <span className="text-[10px] leading-none whitespace-nowrap overflow-visible font-bold">存档退出</span>
                </button>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-[100dvh] w-full flex justify-center overflow-hidden">
      {/* App Container */}
      <div className="w-full h-[100dvh] max-w-md bg-[#F4F4F6] relative flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.15)] overflow-hidden">
        
        {renderContent()}

        {/* Easter Egg Modal attached to the app wrapper */}
        <AnimatePresence>
        {easterEgg && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3B0] p-6 border-[6px] border-[#222224] rounded-2xl z-50 flex flex-col items-center w-[85%] shadow-[12px_12px_0px_rgba(0,0,0,0.6)]"
          >
              <div className="text-6xl mb-4 drop-shadow-md animate-bounce">🏆</div>
              <h2 className="text-base font-black mb-2 text-[#222224] text-center whitespace-pre-wrap leading-relaxed">{easterEgg}</h2>
              <button onClick={() => setEasterEgg(null)} className="poke-button px-8 py-3 mt-4 font-black tracking-widest bg-white border-4 border-[#222] hover:bg-gray-100">收下 (TAKE)</button>
          </motion.div>
        )}
        </AnimatePresence>

      </div>
    </div>
  )
}
