import { Button } from '@/components/ui/button.jsx'
import { AlertTriangle, CheckCircle, X, Brain, AlertCircle, Microscope, Scale, Shield } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部導航 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <span className="text-lg font-bold text-red-600">異味污染真相</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button 
                variant="outline" 
                className="bg-green-100 text-green-800 border-green-300 hover:bg-green-200"
                onClick={() => document.getElementById('scientific-basis').scrollIntoView({ behavior: 'smooth' })}
              >
                科學基礎
              </Button>
              <Button 
                variant="outline" 
                className="bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
                onClick={() => document.getElementById('precision-comparison').scrollIntoView({ behavior: 'smooth' })}
              >
                精度比較
              </Button>
              <Button 
                variant="outline" 
                className="bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200"
                onClick={() => document.getElementById('health-risks').scrollIntoView({ behavior: 'smooth' })}
              >
                健康風險
              </Button>
              <Button 
                variant="outline" 
                className="bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200"
                onClick={() => document.getElementById('legal-basis').scrollIntoView({ behavior: 'smooth' })}
              >
                法規依據
              </Button>
              <Button 
                variant="outline" 
                className="bg-cyan-100 text-cyan-800 border-cyan-300 hover:bg-cyan-200"
                onClick={() => document.getElementById('rights-guide').scrollIntoView({ behavior: 'smooth' })}
              >
                維權指南
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主標題區域 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            揭開異味污染真相
          </h1>
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            嗅覺才是我們的防線
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            當儀器測不到奈米毒害，當政府放任嗅覺欺瞞，
          </p>
          <p className="text-lg mb-8">
            <strong className="text-red-600 font-bold">你的鼻子，就是最後的科學！你的舉報，就是最終的執法！</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('scientific-basis').scrollIntoView({ behavior: 'smooth' })}
            >
              了解科學真相
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
              onClick={() => document.getElementById('rights-guide').scrollIntoView({ behavior: 'smooth' })}
            >
              立即維權行動
            </Button>
          </div>
        </div>
      </section>

      {/* 突出區塊 */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-4xl mb-4">💥</div>
          <h2 className="text-3xl font-bold mb-4">一句話戳破行業騙局</h2>
          <p className="text-xl font-semibold">
            「甲醛聞不到，但毒；硫化氫超臭，卻說安全。你信錯了人。」
          </p>
        </div>
      </section>

      {/* 主要內容區域 */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* 一、嗅覺閾值說明 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🧠</span>
            一、嗅覺閾值是什麼？
          </h2>
          
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              <strong>嗅覺閾值 = 正常人能聞到氣味的最低濃度。</strong>
            </p>
            <p className="text-gray-700">
              它是人體早期警報系統，不是情緒，而是生理警訊。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-600 px-4 py-3 text-left">污染物</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">嗅覺閾值 (ppb)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">儀器靈敏度 (ppb)</th>
                  <th className="border border-gray-600 px-4 py-3 text-left">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">甲醛 (HCHO)</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="text-orange-600 font-semibold">約 50~1000 ppb</span><br />
                    <span className="text-sm text-gray-500">（個體差異大）</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="text-blue-600 font-semibold">約 ±100 ppb</span><br />
                    <span className="text-sm text-gray-500">（民用等級）</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    你可能聞不到，但已具毒性
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">硫化氫 (H₂S)</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="text-green-600 font-semibold">僅 0.47 ppb</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <span className="text-red-600 font-semibold">儀器常低於靈敏範圍</span><br />
                    <span className="text-sm text-gray-500">且易失準</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    你早已聞到，儀器卻說沒問題
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 二、廠商騙術 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            二、廠商玩弄「嗅覺閾值」的騙術
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-500 px-4 py-3 text-left">情境</th>
                  <th className="border border-red-500 px-4 py-3 text-left">廠商說法</th>
                  <th className="border border-red-500 px-4 py-3 text-left">背後詐術</th>
                  <th className="border border-red-500 px-4 py-3 text-left">真相</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">新家裝潢甲醛</td>
                  <td className="border border-gray-300 px-4 py-3 text-blue-600">
                    「儀器測到 0.08 ppm，標準以下」
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">
                    利用你鼻子的「聞不到」來掩蓋毒性
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    0.08 ppm 可能聞不到，但已屬慢性致癌暴露區間
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">垃圾場、污水惡臭</td>
                  <td className="border border-gray-300 px-4 py-3 text-blue-600">
                    「H₂S 濃度 0.01 ppm，低於標準」
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">
                    儀器根本測不準！濕度、雜訊一干擾就失真
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    0.01 ppm 是嗅覺閾值的 21 倍，你早該逃跑了
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 三、科學原理 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🧬</span>
            三、為什麼你買了「90% 去除率」的設備，卻連臭味都還在？
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
              <span className="text-xl mr-2">👉</span>
              科學鐵律：嗅覺遵循對數定律，90%去除≠無味
            </h3>
            <p className="text-gray-700 mb-4">
              污染物濃度下降90%，嗅覺強度卻只減少50%。
            </p>
            <p className="text-gray-700 mb-4">
              這是韋伯–費希納定律（Weber–Fechner Law）的基本原理：
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-4">
              嗅覺強度（S）與刺激物濃度（C）的對數關係：
            </h4>
            <div className="text-center text-lg font-mono bg-white p-4 rounded border">
              S = k · log₁₀(C / C₀)
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">（當 C ≥ C₀ 時成立）</p>
            
            <div className="mt-4 space-y-2 text-sm">
              <p><strong>• k：</strong>個體感官常數（因人而異）</p>
              <p><strong>• C₀：</strong>該物質的絕對嗅覺閾值（單位與C相同）</p>
              <p><strong>• C / C₀：</strong>閾值倍數（關鍵指標）</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <p className="text-red-800 font-semibold">
                即使儀器顯示只剩10%污染物，鼻子還是能「聞出一半的臭」。
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <p className="text-red-800 font-semibold">
                即使去除濃度 90%（從 100 降到 10），你只覺得氣味強度減少一半。
              </p>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="text-yellow-800 font-semibold">
              而像硫化氫這種超低閾值毒物，就算只剩「一點點」，也能讓你聞到嘔吐。
            </p>
          </div>
        </section>

        {/* 四、嗅覺vs儀器 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🎭</span>
            四、嗅覺 vs 儀器：誰才是你該相信的？
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="border border-green-500 px-4 py-3 text-left">指標</th>
                  <th className="border border-green-500 px-4 py-3 text-center">儀器</th>
                  <th className="border border-green-500 px-4 py-3 text-center">嗅覺</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">精準測甲醛</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    <span className="text-green-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                    <span className="text-red-600 font-semibold">不可靠（個體差異大）</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">偵測硫化氫</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                    <span className="text-red-600 font-semibold">易失準</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    <span className="text-green-600 font-semibold">靈敏到極限（0.00047 ppm）</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">面對混合異味</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                    <span className="text-red-600 font-semibold">只能單項分析</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    <span className="text-green-600 font-semibold">可一鼻辨百氣（整體辨識力極強）</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="border border-gray-300 px-4 py-3 font-medium">面對複合污染</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                    <span className="text-red-600 font-semibold">反應遲鈍</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    <span className="text-green-600 font-semibold">即時警報，身體會先說話</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">真實體感</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                    <span className="text-red-600 font-semibold">無法解釋「我怎麼還聞到」</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    <span className="text-green-600 font-semibold">就是你聞到的「臭」</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 五、行業話術 */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🧨</span>
            五、這些行業話術，其實是詐騙
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">
                1. 「已去除 90%，你怎麼還聞到？」
              </h3>
              <p className="text-gray-700">
                → 因為你鼻子沒騙你，他們用錯技術測錯東西。
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">
                2. 「甲醛濃度低於標準，不會有事」
              </h3>
              <p className="text-gray-700">
                → 標準是政治協商出來的，不代表無害，更不是「你不該有感覺」的理由。
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">
                3. 「異味來自別人家，不關我的事」
              </h3>
              <p className="text-gray-700">
                → 當你能聞到，就代表這些奈米級毒物正在進入你的氣道與神經系統。
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* 嗅覺的科學基礎 */}
      <section id="scientific-basis" className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">嗅覺的科學基礎</h2>
            <p className="text-xl text-gray-600">從感覺器官談異味量測標準</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 左側圖片區域 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Brain className="h-6 w-6 mr-3 text-green-600" />
                人體嗅覺系統
              </h3>
              <div className="text-center">
                <img 
                  src="/olfactory-system-chinese-3.jpg" 
                  alt="嗅覺系統示意圖" 
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                />  
              </div>
            </div>

            <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Brain className="h-6 w-6 mr-3 text-green-600" />
                嗅覺如何運作？
              </h3>
              <p className="text-gray-700 mb-4">
                當空氣中的氣味分子進入鼻腔，會與鼻腔上方「嗅覺上皮」中的嗅覺受器細胞（olfactory receptors）結合。
              </p>
              <p className="text-lg font-semibold text-green-600">
                人類約有 400 種功能性嗅覺受器，可分辨超過萬種氣味
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-green-600" />
                感官測試標準化方法
              </h3>
              <p className="text-gray-700 mb-4">
                三點比較式嗅袋法已在台灣（空污法施行細則）、中國（GB/T 14675）、日本（JIS Z 8101-2）中明文納入法規。
              </p>
              <p className="text-lg font-semibold text-green-600">
                有制度、有標準、有法源的專業方法
              </p>
            </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">結論</h3>
            <p className="text-lg text-gray-700">
              嗅覺感官測試並非主觀感覺，而是有制度、有標準、有法源的專業方法，是最直接反映人體受害的科學依據。
            </p>
          </div>
        </div>
      </section>

      {/* 精度比較詳細表格 */}
      <section id="precision-comparison" className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">嗅覺閾值 vs 偵測器精度</h2>
            <p className="text-xl text-gray-600">人鼻比儀器更靈敏</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-blue-500 px-4 py-3 text-left">污染物</th>
                    <th className="border border-blue-500 px-4 py-3 text-left">人鼻嗅閾值 (ppm)</th>
                    <th className="border border-blue-500 px-4 py-3 text-left">商用偵測器下限 (ppm)</th>
                    <th className="border border-blue-500 px-4 py-3 text-left">漏檢風險倍數</th>
                    <th className="border border-blue-500 px-4 py-3 text-left">風險等級</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="border border-gray-300 px-4 py-3 font-medium">硫化氫 H₂S</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.00047</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">0.1</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">212</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">極高風險</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="border border-gray-300 px-4 py-3 font-medium">甲硫醇 CH₃SH</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.0001</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">0.05</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">500</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">極高風險</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">甲醛 HCHO</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">0.05</td>
                    <td className="border border-gray-300 px-4 py-3 text-orange-600 font-semibold">0.1</td>
                    <td className="border border-gray-300 px-4 py-3 text-orange-600 font-bold">2+</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-semibold">高風險</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">結論</h3>
            <p className="text-lg text-gray-700">
              多數儀器對奈米氣味毒物無感；你的鼻子是更靈敏、更可靠的早期警報器。
            </p>
          </div>
        </div>
      </section>

      {/* 健康風險詳細說明 */}
      <section id="health-risks" className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">異味對人體的傷害</h2>
            <p className="text-xl text-gray-600">奈米級污染的健康風險</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-4">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">呼吸道刺激</h3>
              </div>
              <p className="text-gray-700 mb-4">
                甲醛、氨氣、香氛副產物直接刺激呼吸道與神經系統
              </p>
              <div className="text-center">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold">極度危險</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-4">
                <Microscope className="h-12 w-12 text-red-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">血腦障壁穿透</h3>
              </div>
              <p className="text-gray-700 mb-4">
                PM0.1 微粒與阿茲海默症、帕金森氏症相關
              </p>
              <div className="text-center">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold">極度危險</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-4">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">內分泌干擾</h3>
              </div>
              <p className="text-gray-700 mb-4">
                塑化劑與性早熟、甲醛與胎兒發育異常
              </p>
              <div className="text-center">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-semibold">高度危險</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">結論</h3>
            <p className="text-lg text-gray-700">
              異味即風險，聞得到就表示你已暴露於毒物中。
            </p>
          </div>
        </div>
      </section>

      {/* 法規依據詳細說明 */}
      <section id="legal-basis" className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">空氣污染防制法明定</h2>
            <p className="text-xl text-gray-600">異味污染採「官能測定法」</p>
          </div>

          <div className="space-y-8">
            {/* 台灣法源依據 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">台灣法源依據</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">《空氣污染防制法》</h4>
                  <p className="text-gray-600 mb-2">第20條、《施行細則》第17-19條</p>
                  <p className="text-gray-700">明確規範異味污染物管制標準與檢測方法</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">《固定污染源異味污染物排放標準》</h4>
                  <p className="text-gray-600 mb-2">第6條</p>
                  <p className="text-gray-700">「異味污染物濃度之測定，應採用三點比較式嗅袋法或嗅覺測定器法。」</p>
                  <p className="text-sm text-gray-500 mt-2">（環保署公報字第 1080012837 號）</p>
                </div>
              </div>
            </div>

            {/* 國際法源對照 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">國際法源對照</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">日本</h4>
                  <p className="text-gray-600 mb-2">《惡臭防止法》第2條</p>
                  <p className="text-gray-700 mb-2">「規制標準以嗅覺測定法為準」</p>
                  <p className="text-sm text-gray-500">設22個管制區與嗅覺實驗所</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">中國</h4>
                  <p className="text-gray-600 mb-2">《GB 14554-93》第5.2條</p>
                  <p className="text-gray-700 mb-2">「臭氣強度測定採三點比較式嗅袋法」</p>
                  <p className="text-sm text-gray-500">國家強制性標準</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">台灣</h4>
                  <p className="text-gray-600 mb-2">《空污法》第20條</p>
                  <p className="text-gray-700 mb-2">三點比較式嗅袋法為法定依據</p>
                  <p className="text-sm text-gray-500">環保署公報明文規範</p>
                </div>
              </div>
            </div>

            {/* 標準核心說明 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">標準的核心是「人體嗅覺」</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-4">過去的問題</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 環保法規多以「單一污染源濃度」為準則</li>
                    <li>• 讓業者規避真正造成異味的複合性物質</li>
                    <li>• 標準過於狹隘，無法反映實際危害</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-600 mb-4">官能測試的突破</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 以鼻子為基準，打破標準窘境</li>
                    <li>• 從「濃度」轉為「人體感受」</li>
                    <li>• 改變衡量方式的本質</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded border-l-4 border-yellow-500">
                <h5 className="font-bold text-gray-900 mb-2">對照案例：管制標準的失衡</h5>
                <p className="text-gray-700">「工廠異味管得比你家臥室還嚴格」</p>
                <p className="text-sm text-gray-600 mt-1">反映出台灣目前室內嗅覺管制的空白與失衡</p>
              </div>
            </div>

            {/* 資料來源 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">資料來源</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p>• Buck & Axel (1991, Cell) - 嗅覺受器研究</p>
                  <p>• Firestein (2001, Nature) - 嗅覺機制</p>
                  <p>• Devos et al. (1990) - 嗅覺閾值數據</p>
                </div>
                <div>
                  <p>• 行政院環保署異味指引</p>
                  <p>• 環保署公報字第 1080012837 號</p>
                  <p>• 日本惡臭防止法、中國GB 14554-93</p>
                </div>
              </div>
            </div>

            {/* 結論 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">結論</h3>
              <p className="text-lg text-gray-700 mb-4">
                嗅覺優先原則已獲三地法源確認，唯有讓標準回歸鼻子，才能避免「合規卻傷害」的偽科學。
              </p>
              <p className="text-lg text-gray-700">
                官能測試是真正以人為本的環保標準，是對「複合污染物」唯一有效的量測方式。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 維權指南詳細說明 */}
      <section id="rights-guide" className="bg-cyan-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">公害陳情系統與維權操作指南</h2>
            <p className="text-xl text-gray-600">你的鼻子就是執法的觸發器</p>
          </div>

          <div className="space-y-8">
            {/* 維權權利 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">台灣民眾維權權利</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">可僅憑嗅覺感受陳情，不需儀器數據</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">政府機關有「不得吃案」義務，需調查並回復</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">地方環保局應執行嗅袋法調查</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">若超標，依法裁罰或命令改善</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 操作流程 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">操作流程</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <p className="font-semibold text-gray-900 mb-2">前往公害陳情平台</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <p className="font-semibold text-gray-900 mb-2">填寫地點、時間、異味特徵</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <p className="font-semibold text-gray-900 mb-2">提出要求：請依據《異味污染物官能測定法》檢測</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <p className="font-semibold text-gray-900 mb-2">可上傳氣味紀錄日誌、影片、照片作佐證</p>
                </div>
              </div>
            </div>

            {/* 陳情案例示範 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">公害陳情案例示範：檢舉餐廳異味排放</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 情境描述</h4>
                  <p className="text-gray-700">
                    位於台中市西屯區文心路三段與某巷交叉口之「××海鮮熱炒店」，於每日晚間17:30至21:30營業時段排放大量油煙與異味，周邊居民反應長期有焦臭味與油膩氣味飄散，導致開窗後家中油垢累積與身體不適（如頭痛、氣喘惡化）。
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 觀察情形</h4>
                  <p className="text-gray-700">
                    現場雖設有靜電除油煙設備，但疑似僅針對油脂去除，並未加裝活性碳或異味處理單元，導致異味仍持續排放至周界。
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 法規援引</h4>
                  <p className="text-gray-700 mb-2">
                    依據《餐飲業空氣污染防制設施管理辦法》第4條第2項：
                  </p>
                  <p className="text-gray-700 italic mb-2">
                    餐飲業應設置有效去除油煙、異味與粒狀污染物之空氣污染防制設施。
                  </p>
                  <p className="text-gray-700">
                    而目前該業者之靜電設備僅針對油脂處理，未能有效控制異味排放，應屬違規。
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 檢舉文範例</h4>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700">
                    <p className="mb-3">
                      檢舉對象為台中市西屯區文心路三段××巷之「××熱炒」，每日下午17:30至21:30營業時段固定排放異味油煙，造成周邊巷弄與住家皆充滿刺鼻氣味，已嚴重影響生活品質與健康。現場觀察雖設有靜電除油煙設備，但未設異味控制系統，無法達到有效處理效果。
                    </p>
                    <p className="mb-3">
                      本人已於 2025 年 7 月 20 日、21 日、23 日（連續三日）晚間 18:00 至 20:30，現場聞到焦臭與油膩異味，並記錄氣味強度與身體不適反應。
                    </p>
                    <p>
                      請依《固定污染源異味污染物排放標準》第6條派員採三點比較式嗅袋法進行現場監測，並依《餐飲業空氣污染防制設施管理辦法》第4條第二項認定設施無效處理異味，依法命其改善。
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">📍 建議附檔</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 排氣口影片（記錄排放情況）</li>
                    <li>• 周界街景圖與氣味描述（日誌格式）</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h5 className="font-bold text-gray-900 mb-2">重點提醒</h5>
                  <p className="text-gray-700">
                    此案例示範了如何結合具體觀察、法規依據和專業術語來撰寫有效的檢舉文。關鍵在於明確指出違法事實、援引正確法條，並要求採用官能測定法進行檢測。
                  </p>
                </div>
              </div>
            </div>

            {/* 行動呼籲 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">立即行動！</h3>
              <p className="text-lg text-gray-700 mb-6">
                不要再忍受異味污染，你的健康權益需要主動維護
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3"
                  onClick={() => window.open('https://ww3.moenv.gov.tw/Public/Index.aspx#gsc.tab=0', '_blank')}
                >
                  前往公害陳情平台
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>  

      {/* 總結口號區域 */}
      <section className="bg-gradient-to-br from-red-500 via-red-600 to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* 主標語 */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">你的鼻子，就是最早的儀器</h2>
            <p className="text-3xl md:text-4xl font-bold">你的嗅覺，就是最準的標準</p>
          </div>

          {/* 三個要點卡片 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4">儀器會說謊</h3>
              <p className="text-xl">鼻子不會</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
              <div className="text-6xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4">法律早已承認</h3>
              <p className="text-xl">官能測定法的效力</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">公民可以主動</h3>
              <p className="text-xl">使用這套系統維護權益</p>
            </div>
          </div>

          {/* 底部總結 */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">總結口號</h3>
            <p className="text-xl mb-4">當儀器測不到奈米毒害，當政府放任嗅覺欺瞞，</p>
            <p className="text-3xl font-bold text-yellow-300">
              你的鼻子，就是最後的科學！
            </p>
            <p className="text-3xl font-bold text-yellow-300">
              公害陳情制度讓每位公民的鼻子都能成為執法的觸發器！
            </p>
          </div>
        </div>
      </section>

      {/* 頁尾區域 */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-red-400 mb-4">異味污染真相</h3>
          <p className="text-lg">保護你的嗅覺權益，維護環境健康</p>
        </div>
      </section>

    </div>
  )
}

export default App

