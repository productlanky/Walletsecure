
import { useState } from 'react';
import { ArrowDownUp, Settings, Clock, RefreshCw, Wallet2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('BTC');

  return (
    <div className="font-sans ">
      <main>
        <div className="max-w-3xl mx-auto text-center text-white p-8 space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">Swap anytime <br />anywhere</h1>
          <p className="text-[#707070] text-base md:text-lg">Cutting-edge decentralized exchange (DEX)  a high-performance Layer 2 blockchain developed on Optimism’s Superchain</p>
        </div>
        <div className="max-w-md mx-auto mt-8 border border-white/10 rounded-3xl p-6 bg-[#111111] w-full">
          <div className="bg-[#2A2A2A] px-6 py-3 rounded-full w-fit mb-5 mx-auto text-center text-sm font-medium text-white">
            Swap
          </div>

          <section className='flex items-start justify-between mb-6'>
            <div className="text-left">
              <h3 className="text-2xl">Swap</h3>
              <p className="text-[#656565] text-lg">Swap tokens instantly!</p>
            </div>

            <div className="flex gap-3">
              <div className="bg-white/5 p-1.5 rounded-full flex items-center">
                <Settings size={18} className="text-gray-400 cursor-pointer" />
              </div>
              <div className="bg-white/5 p-1.5 rounded-full flex items-center">
                <Clock size={18} className="text-gray-400 cursor-pointer" />
              </div>
              <div className="bg-white/5 p-1.5 rounded-full flex items-center">
                <RefreshCw size={18} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </section >

          <section className='bg-[#171717] p-2 rounded-3xl w-full'>
            <div className="flex items-center gap-2 bg-[#2A2A2A] rounded-full w-fit p-2 pr-4">
              <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs">⬤</span>
              <select
                className="bg-transparent text-white outline-none w-[70px]"
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
              >
                <option value="ETH">ETH</option> 
              </select>
            </div>
            <div className="flex items-center justify-between w-full mt-4 pr-3">
              <input
                type="number"
                placeholder="0.0"
                className="bg-transparent nu text-left text-3xl max-w-24 outline-none"
              />
              <span className="text-[#F7E500] text-lg cursor-pointer">Max</span>
            </div>
          </section>

          <div className="flex justify-center mx-auto my-2 w-fit rounded-full bg-[#2A2A2A] p-2">
            <ArrowDownUp className="text-white" />
          </div>


          <section className='bg-[#171717] p-2 rounded-3xl w-full'>
            <div className="flex items-center gap-2 bg-[#2A2A2A] rounded-full w-fit p-2 pr-4">
              <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs">⬤</span>
              <select
                className="bg-transparent text-white outline-none w-[70px]"
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
              >
                <option value="BTC">BTC</option>
              </select>
            </div>
            <div className="flex items-center justify-between w-full mt-4 pr-3">
              <input
                type="number"
                placeholder="0.0"
                className="bg-transparent nu text-left text-3xl max-w-24 outline-none"
              />
            </div>
          </section>


          {/* Connect Wallet Button */}
          <Link to={'/connect'} className="mt-4 w-full bg-[#F7E500] text-black font-semibold py-3 flex items-center justify-center gap-1 rounded-full hover:bg-yellow-500 transition">
            <Wallet2 className="text-black" /> Connect wallet
          </Link>
        </div >

      </main >
    </div >
  );
}
