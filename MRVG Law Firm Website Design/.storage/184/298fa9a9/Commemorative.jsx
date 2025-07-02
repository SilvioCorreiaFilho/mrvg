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
    
    // Create gradient for the chart
    const gradientFill1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill1.addColorStop(0, 'rgba(60, 60, 60, 0.8)');
    gradientFill1.addColorStop(1, 'rgba(60, 60, 60, 0)');
    
    const gradientFill2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill2.addColorStop(0, 'rgba(100, 100, 100, 0.6)');
    gradientFill2.addColorStop(1, 'rgba(100, 100, 100, 0)');
    
    const gradientFill3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill3.addColorStop(0, 'rgba(140, 140, 140, 0.4)');
    gradientFill3.addColorStop(1, 'rgba(140, 140, 140, 0)');

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
            borderWidth: 3,
          },
          {
            label: 'Crescimento de Clientes',
            data: clientGrowth,
            borderColor: '#4A4A4A',
            backgroundColor: gradientFill2,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#4A4A4A',
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

        {/* Anniversary Logo Section */}
        <div className="flex justify-center mb-16">
          <img 
            src="/assets/images/anniversary_logo.png" 
            alt="MRVG 15 Anos" 
            className="h-auto w-full max-w-md object-contain" 
          />
        </div>

        {/* Data Visualization */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nossa Evolução</h3>
          <div className="relative h-[500px]">
            <canvas ref={chartRef}></canvas>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm italic">
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