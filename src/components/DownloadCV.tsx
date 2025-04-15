import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, ChevronRight } from "lucide-react";

const DownloadCV = () => {
  const handleDownload = () => {
    // Replace this URL with the actual path to your CV file
    const cvUrl = "/franciscv.pdf";

    try {
      // Create an anchor element
      const link = document.createElement("a");
      link.href = cvUrl;
      link.setAttribute("download", "Francis-Acquah-CV.pdf");
      link.setAttribute("target", "_blank");

      // Append to body, click and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert(
        "Sorry, there was an error downloading the CV. Please try again later."
      );
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-navy to-navy-dark text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold">
              Want to know more about my experience?
            </h2>
            <p className="text-white/80 max-w-2xl">
              Download my curriculum vitae to get detailed information about my
              education, work experience, skills, and achievements.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 gap-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
            <FileText className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-2">Complete Profile</h3>
            <p className="text-white/80 mb-4">
              Get a comprehensive overview of my professional journey and
              educational background.
            </p>
            <Button
              variant="link"
              onClick={handleDownload}
              className="text-gold hover:text-gold-light p-0 h-auto font-medium"
            >
              Download CV <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
            <FileText className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detailed Experience</h3>
            <p className="text-white/80 mb-4">
              Explore my work history, including forex trading experience and
              event organization projects.
            </p>
            <Button
              variant="link"
              onClick={handleDownload}
              className="text-gold hover:text-gold-light p-0 h-auto font-medium"
            >
              Download CV <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
            <FileText className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
            <p className="text-white/80 mb-4">
              Review a detailed breakdown of my business, trading, and
              interpersonal skills.
            </p>
            <Button
              variant="link"
              onClick={handleDownload}
              className="text-gold hover:text-gold-light p-0 h-auto font-medium"
            >
              Download CV <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
