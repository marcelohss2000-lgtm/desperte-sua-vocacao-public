import { Button } from "@/components/ui/button";
import { Check, BookOpen, Video, Headphones, Podcast, FileText, Sparkles, Heart, Compass, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Home() {
  // Force cache bust - v2
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "https://pay.kiwify.com.br/ijYxC0g";
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold text-white">Desperte Sua Vocação</span>
          </div>
          <Button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
          >
            Acessar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Você sente que está vivendo a vida <span className="text-amber-400">errada?</span>
                </h1>
                <p className="text-xl text-blue-100">
                  Descubra o chamado único que existe dentro de você e comece a viver com propósito real — não no piloto automático.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Você reconhece alguma dessas situações?</p>
                <ul className="space-y-2">
                  {[
                    "Tem um emprego estável, mas sente uma inquietação persistente",
                    "Seus talentos naturais estão adormecidos, desperdiçados",
                    "Medo de chegar ao fim da vida e perceber que viveu a vida esperada, não a sua",
                    "Ouve um chamado interior que não consegue nomear"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-blue-50">
                      <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <p className="text-sm text-amber-300 font-semibold mb-4">
                  ✨ Essa inquietação não é fraqueza. É o eco de um chamado interior pedindo para ser ouvido.
                </p>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/puZkaHRRyJVDbNtpUCohhq/sandbox/2lSUdCnjj7dRcMbAKbBoem-img-1_1770680954000_na1fn_aGVyby12b2NhY2Fv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcHVaa2FIUlJ5SlZEYk50cFVDb2hocS9zYW5kYm94LzJsU1VkQ25qajdkUmNNYkFLYkJvZW0taW1nLTFfMTc3MDY4MDk1NDAwMF9uYTFmbl9hR1Z5YnkxMmIyTmhZMkZ2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=L4Ay8VqCkSp2Konxr58DvtyI~nusgJAP3oNPWGtdqQAsVd7mpRlSgeLWDJL071Bj~4DVwFKJK3-Y76hi74JQdus2CeCtoY4oo7hK4gI3W2GtGlysAGxlOKc9a6bl5oF7AccjResTkU1bITV1-5f9t3nKodn4wbmCwH8J918PkloNV4K-em-m4xs7foS9sTWDXGG-aVb6JHYV5vVyb~znUPS-WYPDUm-l5gsnQx1h2ky8yGQ0Jce2hpqQMvQ4HwuIt3YAZSOdQDRVgI0K1FvyogpZ4lolSlvO~iW8ZCV50bwQvBeMbNe0uGSWf8~tkooVKvsoQtv7bRzjENudlwN4vA__"
                alt="Despertar Vocação"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redefinition Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Vocação Não É Emprego.<br />
              <span className="text-amber-400">É Chamado.</span>
            </h2>

            <p className="text-lg text-blue-100">
              Nossa cultura reduziu "vocação" a "escolha de profissão". Mas a raiz da palavra, <em>vocare</em>, significa <strong>"chamar"</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Não é apenas",
                  items: ["Uma carreira", "Uma lista de habilidades", "Um teste vocacional rápido"]
                },
                {
                  title: "É um",
                  items: ["Chamado que você escuta", "Algo que você discerne", "Uma resposta que você oferece"]
                },
                {
                  title: "Feito em um mundo",
                  items: ["Barulhento", "Distraído", "Que nos empurra para status, não para sentido"]
                }
              ].map((col, idx) => (
                <div key={idx} className="bg-blue-900/50 backdrop-blur p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-amber-400 font-bold mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="text-blue-50 flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-xl text-amber-300 pt-8 font-semibold">
              E se houvesse um caminho estruturado para ouvir esse chamado?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Apresentamos: <span className="text-amber-400">Desperte Sua Vocação</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Um caminho estruturado de discernimento vocacional que une conteúdo profundo e prática guiada.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-blue-100 leading-relaxed">
              Não é um curso rápido de autoajuda. É um <strong className="text-amber-400">mapa para a jornada da sua alma</strong> — baseado em autores como <strong>Viktor Frankl</strong>, <strong>Teresa d'Ávila</strong>, <strong>Jung</strong>, <strong>Rick Warren</strong> e <strong>N.T. Wright</strong>, traduzidos com linguagem clara e exemplos práticos.
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-400/30 max-w-2xl w-full">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663159158705/STaNXRFA9foEsn7KhNuVwF/produto_desperte_vocacao_1fa5f4fd.png" 
                alt="Desperte Sua Vocação - Produto Digital" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Core Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Núcleo Principal:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Ebook Completo",
                  subtitle: "Desperte Sua Vocação – O Caminho Iluminado",
                  description: "Um mapa para a jornada da sua alma, cobrindo desejo de sentido, Grande História, castelo interior, individuação, vocação, sofrimento, amor, missão e legado."
                },
                {
                  icon: Video,
                  title: "Vídeo Inspiracional",
                  subtitle: "Desperte Sua Vocação",
                  description: "Sintetiza os pilares do ebook em uma mensagem clara e visualmente envolvente. Apresenta os 3 caminhos para o sentido segundo Viktor Frankl."
                },
                {
                  icon: Headphones,
                  title: "Áudio Completo",
                  subtitle: "Mais de 2 horas de conteúdo",
                  description: "Ouça no carro, na caminhada, nas tarefas do dia a dia. Conteúdo absorvido pela escuta, entrando no coração pela repetição."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-blue-900/30 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-400/20">
                    <Icon className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-amber-300 font-semibold mb-3">{item.subtitle}</p>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur border border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-300 mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Bônus Exclusivos
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Podcast,
                  title: "Podcast Exclusivo",
                  subtitle: "A Jornada da Vocação (~14 minutos)",
                  description: "Episódio curto e profundo, para lembrar que vocação é chamado, não invenção. Distinguir propósito verdadeiro de promessas vazias. Ideal para momentos de confusão ou decisões importantes."
                },
                {
                  icon: FileText,
                  title: "Fichário Prático",
                  subtitle: "A Jornada da Vocação (Workbook)",
                  description: "Seu laboratório de vocação: mergulhe na jornada interior e descubra seu chamado autêntico. Através de reflexões guiadas baseadas em Viktor Frankl, Teresa d'Ávila e Carl Jung, você processará suas inquietações, escreverá suas descobertas, orará por clareza e decidirá seus próximos passos concretos. Transforme a Grande História em sua história pessoal com exercícios práticos que conectam o divino ao seu propósito único."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-blue-900/50 backdrop-blur border border-amber-400/30 rounded-xl p-6">
                    <Icon className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-amber-300 font-semibold mb-3">{item.subtitle}</p>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Ao Caminhar Por Este Processo, Você Vai...
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Compass,
                title: "Reconhecer a Fome de Sentido",
                description: "Usar a inquietação como bússola, não como fraqueza"
              },
              {
                icon: Heart,
                title: "Entender Vocação como Chamado",
                description: "Resposta a um chamado, não como um produto a ser consumido"
              },
              {
                icon: Sparkles,
                title: "Percorrer a Jornada Interior",
                description: "Explorar o castelo da alma e as camadas da consciência"
              },
              {
                icon: Zap,
                title: "Enxergar Sua História Maior",
                description: "Como parte de uma Grande História que transcende você"
              },
              {
                icon: Heart,
                title: "Integrar Dons e Missão",
                description: "Unir dons naturais, caráter, sofrimento e amor em propósito concreto"
              },
              {
                icon: Compass,
                title: "Construir Práticas Sustentáveis",
                description: "Hábitos que sustentam sua vocação a longo prazo"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <Icon className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Para Quem É (E Para Quem Não É)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-900/30 backdrop-blur border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" />
                É para você se:
              </h3>
              <ul className="space-y-3">
                {[
                  "Sente um vazio ou inquietação, mesmo 'com tudo certo' por fora",
                  "Deseja alinhar fé, dons, trabalho e vida cotidiana a um propósito profundo",
                  "Busca profundidade, mas com linguagem clara e exemplos práticos",
                  "Está disposto a olhar para dentro, escrever, refletir e agir"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-green-50">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/30 backdrop-blur border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center gap-2">
                <span className="text-2xl">✕</span>
                Não é para você se:
              </h3>
              <ul className="space-y-3">
                {[
                  "Quer apenas uma fórmula mágica de 'fique rico rápido'",
                  "Não pretende se envolver de verdade com a própria história",
                  "Busca motivação rasa e imediata, sem compromisso real",
                  "Espera transformação sem reflexão e ação pessoal"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-red-50">
                    <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Por Que Este Material É Diferente
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Profundidade com Clareza",
                description: "Autores renomados (Frankl, Teresa d'Ávila, Jung, Warren, Wright) traduzidos com linguagem acessível e exemplos práticos."
              },
              {
                title: "Integração Real",
                description: "Espiritualidade, psicologia, filosofia e vida prática andam juntas — não separadas."
              },
              {
                title: "Caminho, Não Evento",
                description: "Você pode revisitar o conteúdo em diferentes fases da vida. Não é um 'programa de 30 dias' que você esquece."
              },
              {
                title: "Ferramenta Prática",
                description: "O fichário transforma ideias em passos concretos. Você não só entende; você processa, escreve, ora e decide."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-amber-400 mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Pronto para Despertar Sua Vocação?
            </h2>

            <div className="bg-gradient-to-br from-amber-500/20 to-blue-500/20 backdrop-blur border border-amber-400/50 rounded-2xl p-12">
              <p className="text-3xl font-bold text-white mb-2">R$ 97</p>
              <p className="text-blue-100 mb-6">Acesso completo a todo o material</p>

              <div className="bg-blue-900/50 rounded-lg p-6 mb-8 text-left">
                <p className="text-sm text-blue-200 font-semibold mb-3">Você recebe:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Ebook completo (~95 páginas)",
                    "Vídeo inspiracional (HD)",
                    "Áudio completo (2+ horas)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-50">
                      <Check className="w-4 h-4 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-blue-700 pt-4">
                  <p className="text-xs text-amber-300 font-semibold mb-2">+ BÔNUS EXCLUSIVOS:</p>
                  <ul className="space-y-2">
                    {[
                      "Podcast exclusivo (~14 minutos)",
                      "Fichário prático (Workbook em PDF)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-amber-50">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={submitted}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold text-lg py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50 mb-6"
              >
                {submitted ? "✓ Redirecionando..." : "Quero Acessar Agora - R$ 97"}
              </Button>

              <p className="text-xs text-blue-300 mt-4 text-center">
                Dúvidas? Envie um email para <a href="mailto:Contato@conquista22produtosdigitais.com" className="text-amber-400 hover:text-amber-300 font-semibold">Contato@conquista22produtosdigitais.com</a>
              </p>
            </div>

            <p className="text-blue-100 text-lg">
              <span className="text-amber-400 font-semibold">✨ Investimento único</span> que pode transformar como você vê sua vida e seu propósito.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {[
              {
                question: "Como funciona o acesso ao material?",
                answer: "Após a compra, você receberá um email com um link de acesso. Você poderá baixar todos os arquivos (ebook, vídeo, áudio, podcast e workbook) imediatamente. O acesso é vitalício — você pode revisitar o conteúdo quantas vezes quiser."
              },
              {
                question: "Posso acessar em múltiplos dispositivos?",
                answer: "Sim! Você pode acessar o material em computador, tablet e smartphone. Os arquivos são seus para usar como preferir — offline ou online, em qualquer dispositivo."
              },
              {
                question: "Qual é a política de reembolso?",
                answer: "Se você não ficar satisfeito nos primeiros 7 dias, oferecemos reembolso total, sem perguntas. Queremos que você se sinta seguro ao investir em sua jornada de discernimento vocacional."
              },
              {
                question: "O material é apenas para pessoas religiosas?",
                answer: "Não. Embora o material explore dimensões espirituais, ele é acessível a qualquer pessoa que busque profundidade e sentido na vida. Os autores citados (Frankl, Jung, etc.) oferecem perspectivas universais sobre propósito e significado."
              },
              {
                question: "Quanto tempo leva para completar o material?",
                answer: "Não há prazo fixo. O ebook tem cerca de 95 páginas (2-3 horas de leitura). O áudio tem 2+ horas. O workbook é prático e pode ser feito no seu ritmo. Recomendamos dedicar 2-4 semanas para uma jornada completa, mas você pode ir mais rápido ou mais lento conforme necessário."
              },
              {
                question: "Há suporte ou comunidade após a compra?",
                answer: "Sim! Você terá acesso a suporte por email em Contato@conquista22produtosdigitais.com para dúvidas sobre o material. Estamos desenvolvendo uma comunidade exclusiva para clientes — fique atento para atualizações!"
              },
              {
                question: "O que diferencia este material de outros cursos sobre propósito?",
                answer: "Este não é um 'curso rápido'. É um caminho estruturado que integra espiritualidade, psicologia, filosofia e vida prática. Baseado em autores renomados como Viktor Frankl, Teresa d'Ávila e Jung, com linguagem clara e exemplos práticos. O workbook transforma ideias em ações concretas."
              },
              {
                question: "Posso compartilhar o material com amigos?",
                answer: "O material é para uso pessoal. Se seus amigos se interessarem, cada um deve adquirir sua própria cópia. Assim você também nos ajuda a continuar criando conteúdo de qualidade."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-blue-900/30 backdrop-blur border border-blue-500/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-start justify-between hover:bg-blue-900/50 transition-colors text-left"
                >
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-blue-500/20">
                    <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8 text-center">
            <p className="text-blue-100 mb-4">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <a
              href="mailto:Contato@conquista22produtosdigitais.com"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50"
            >
              Enviar um Email: Contato@conquista22produtosdigitais.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8">
        <div className="container text-center text-blue-300 text-sm">
          <p>© 2026 Desperte Sua Vocação. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com propósito e clareza.</p>
        </div>
      </footer>
    </div>
  );
}
