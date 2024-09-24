import React, { useState, useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function MovingTriangle() {
    const [linePosition, setLinePosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setLinePosition(Math.max(0, Math.min(100, percentage)));
        }
    };

    const handleTouchMove = (e) => {
        e.preventDefault(); // 阻止默认的触摸行为
        if (containerRef.current && e.touches[0]) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setLinePosition(Math.max(0, Math.min(100, percentage)));
        }
    };
    
    const handleTouchStart = (e) => {
        e.preventDefault(); // 阻止默认的触摸行为
    };

        // 计算商品价值
        const calculateValue = () => {
            const percentage = (100 - linePosition) / 50;// 0 到 1 之间的值
            return Math.round(percentage * 100); // 假设最大价值为 100
        };
    return (
        <div className="w-full">
            <div 
                ref={containerRef} 
                className="h-60 sm:h-80 relative overflow-hidden bg-gray-100 cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
            >
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex scale-[0.5] sm:scale-75 md:scale-100">
                    {/* 左侧黄金矩形 */}
                    <div className="w-[258.88px] h-40 bg-blue-500"></div>
              
                    {/* 右侧直角三角形 */}
                    {/* <svg width="258.88" height="160" viewBox="0 0 258.88 160">
                        <polygon points="0,0 0,160 258.88,160" fill="#F59E0B" />
                        {linePosition > 50 && (
                            <>
                                <line x1="0" y1="0" x2="258.88" y2="0" stroke="red" strokeWidth="1" strokeDasharray="5,5" />
                                <line x1="258.88" y1="0" x2="258.88" y2="160" stroke="red" strokeWidth="1" strokeDasharray="5,5" />
                                <polygon 
                                    points={`0,0 ${(linePosition - 50) * 5.1776},0 ${(linePosition - 50) * 5.1776},${(linePosition - 50) * 3.2}`} 
                                    fill="rgba(0,0,0,0.5)"
                                />
                            </>
                        )}
                    </svg> */}

<svg width="258.88" height="160" viewBox="0 0 258.88 160">
                        <polygon points="0,0 0,160 258.88,160" fill="#F59E0B" />
                        {linePosition > 50 && (
                            <>
                                <line x1="0" y1="0" x2="258.88" y2="0" stroke="red" strokeWidth="1" strokeDasharray="5,5" />
                                <line x1="258.88" y1="0" x2="258.88" y2="160" stroke="red" strokeWidth="1" strokeDasharray="5,5" />
                                <polygon 
                                    points={`0,0 ${(linePosition - 50) * 5.1776},0 ${(linePosition - 50) * 5.1776},${(linePosition - 50) * 3.2}`} 
                                    fill="rgba(0,0,0,0.5)"
                                />
                             {/* 黑点 */}
                              {/* 价值标注 */}
            <text 
                x={(linePosition - 50) * 5.1776 - 8} 
                y={(linePosition - 50) * 3.2 - 8} 
                fill="black" 
                fontSize="12"
                textAnchor="end"
            >
                商品价值: {calculateValue()}
            </text>
            {/* 黑点 */}
            <circle 
                cx={(linePosition - 50) * 5.1776} 
                cy={(linePosition - 50) * 3.2} 
                r="3" 
                fill="black" 
            />
                            </>
                        )}
                    </svg>
                </div>

                {/* 垂直线 */}
                <div 
                    className="absolute top-0 bottom-0 w-px bg-red-500 pointer-events-none" 
                    style={{left: `${linePosition}%`}}
                ></div>
                {/* 手机视图下的滑块 */}
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={linePosition} 
                    onChange={(e) => setLinePosition(Number(e.target.value))}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 sm:hidden"
                />
            </div>
        </div>
    );
}

  function App() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-2 font-sans text-gray-800">
        {/* 其他内容 */}
        <section>
          {/* <h2 className="text-2xl font-semibold mb-4">几何图形展示</h2> */}
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下图橙色展示的是消费者在进行商品消费后，商品价值随着时间的流逝逐渐递减的过程。而蓝色表示货币在交易之后，
          其保存的价值并没有减少，甚至随着时间的流逝，其价值逐渐增加。一件产品自其被生产之日起，它就有一个确定的有效期，无论人是否买它，是否使用它，
          过了这个期限其价值就会归零，甚至为负（环境污染）。 所以当一件产品进行交易后，消费者都在时刻承受着财富的永久损失。下图中当把红色线条移动到橙色消费者区域时的灰色三角形表示消费者在交易后，
          其财富的永久丢失。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而这永久丢失的财富，就是生产者通过交易实现的财富增值。所以在一个商品经济的市场中，消费者因为没有生产力，永远是被剥削的一方，这种剥削是
        通过货币锚定人的居住权等一切资源，来驱使人的行为（包括各种劳动活动，帮助生产者进行增值扩张等一切迫于生存而被迫进行的行为）。

          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;下图展示的是消费者在进行商品消费后，商品价值随着时间的流逝逐渐递减的过程。
            商品价值可表示为：
            <InlineMath math="V(t) = V_0 \cdot (1 - \frac{t}{T})" />
            ，其中 <InlineMath math="V_0" /> 为初始价值，<InlineMath math="T" /> 为商品的有效期。
          </p>
          <MovingTriangle />
        </section>
        {/* 其他内容 */}
      </div>
    );
  }
  
  export default App;