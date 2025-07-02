import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Commemorative = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Sample data - to be replaced with real data later
    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const casesHandled = [24, 35, 48, 67, 84, 105, 130, 158, 195, 238, 275, 320, 368, 412, 450];
    const clientGrowth = [10, 18, 30, 45, 62, 80, 105, 135, 168, 205, 245, 290, 340, 395, 440];
    const teamSize = [3, 5, 7, 9, 12, 15, 18, 22, 26, 30, 34, 38, 42, 46, 50];
    
    const ctx = chartRef.current.getContext('2d');
    
    // Create luxury gradient for the chart to match the new anniversary art
    const gradientFill1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill1.addColorStop(0, 'rgba(45, 45, 45, 0.85)');
    gradientFill1.addColorStop(1, 'rgba(45, 45, 45, 0)');
    
    const gradientFill2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill2.addColorStop(0, 'rgba(133, 99, 58, 0.6)');
    gradientFill2.addColorStop(1, 'rgba(133, 99, 58, 0)');
    
    const gradientFill3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill3.addColorStop(0, 'rgba(104, 104, 104, 0.5)');
    gradientFill3.addColorStop(1, 'rgba(104, 104, 104, 0)');

    // Create and configure the chart
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Casos Atendidos',
            data: casesHandled,
            borderColor: '#232323',
            backgroundColor: gradientFill1,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#232323',
            pointBorderColor: '#232323',
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: '#000',
            borderWidth: 3,
          },
          {
            label: 'Crescimento de Clientes',
            data: clientGrowth,
            borderColor: '#85633A',
            backgroundColor: gradientFill2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#85633A',
            pointBorderColor: '#85633A',
            pointHoverBackgroundColor: '#6D4E2C',
            pointHoverBorderColor: '#6D4E2C',
            borderWidth: 3,
          },
          {
            label: 'Tamanho da Equipe',
            data: teamSize,
            borderColor: '#6E6E6E',
            backgroundColor: gradientFill3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#6E6E6E',
            pointBorderColor: '#6E6E6E',
            pointHoverBackgroundColor: '#505050',
            pointHoverBorderColor: '#505050',
            borderWidth: 3,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                family: 'Raleway',
                size: 12
              },
              color: '#333',
              padding: 20
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
              family: 'Raleway',
              size: 14
            },
            bodyFont: {
              family: 'Raleway',
              size: 13
            },
            padding: 15,
            cornerRadius: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Raleway',
                size: 11
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
              drawBorder: false
            },
            ticks: {
              font: {
                family: 'Raleway',
                size: 11
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="commemorative" className="py-16 px-4 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">15 Anos de Excelência</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrando uma trajetória de sucesso e dedicação na advocacia, consolidando nossa posição 
            como referência em soluções jurídicas que transformam desafios em resultados.
          </p>
        </div>

        {/* Anniversary Logo Section - Luxurious Design */}
        <div className="relative flex justify-center mb-20 mt-8 py-8">
          {/* Gold accent elements */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <div className="w-4/5 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <div className="w-1 h-4/5 bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          {/* Main image with luxury effects */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 overflow-hidden rounded-xl">
              <img 
                src="/assets/images/new_anniversary_art.png" 
                alt="MRVG 15 Anos" 
                className="h-auto w-full max-w-xl object-contain transition duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Luxurious Data Visualization */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 mb-16 border border-gray-100 relative overflow-hidden">
          {/* Elegant corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-700/20 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-700/20 rounded-br-2xl"></div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center relative">
            <span className="relative inline-block">
              Nossa Evolução
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></span>
            </span>
          </h3>
          
          <div className="relative h-[500px] z-10">
            <canvas ref={chartRef}></canvas>
          </div>
          
          <div className="mt-10 text-center text-gray-500 text-sm italic">
            * Os dados representam estimativas e serão atualizados com informações precisas
          </div>
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800">
            <div className="text-4xl font-bold text-gray-800 mb-2">450+</div>
            <div className="text-xl font-medium text-gray-700">Casos de Sucesso</div>
            <p className="mt-4 text-gray-600">
              Construímos um legado de soluções jurídicas efetivas para nossos clientes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800">
            <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-xl font-medium text-gray-700">Profissionais</div>
            <p className="mt-4 text-gray-600">
              Nossa equipe multidisciplinar oferece expertise jurídica de alto nível.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-800">
            <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
            <div className="text-xl font-medium text-gray-700">Satisfação de Clientes</div>
            <p className="mt-4 text-gray-600">
              O compromisso com a excelência reflete-se na confiança de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commemorative;