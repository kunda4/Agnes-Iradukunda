import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"
import type { Partner } from "@/lib/partners"

interface PartnerCardProps {
  partner: Partner
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader className="text-center">
        <div className="w-full h-24 relative mb-4 bg-gray-50 rounded-lg flex items-center justify-center">
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={`${partner.name} logo`}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{partner.category}</Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            Since {partner.established}
          </div>
        </div>
        <CardTitle className="text-lg">{partner.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm">{partner.description}</p>

        <div className="bg-green-50 p-3 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Partnership</h4>
          <p className="text-green-700 text-sm">{partner.partnership}</p>
        </div>

        {partner.website && (
          <div className="flex items-center justify-center pt-2">
            <a
              href={`https://${partner.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-700 text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Visit Website
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
