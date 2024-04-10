"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  INTEGRATIONS,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { forwardRef, useState, useEffect } from "react";

const NextBoilerPlate = forwardRef((props, state_ref) => {
  const [state, setState] = useState({
    ga_id: "",
    premium_features: PREMIUM_FEATURES.reduce(
      (acc, fe) => ({ ...acc, [fe.item_id]: false }),
      {}
    ),
    crisp_id: "",
    post_hog: "",
    twak_to_id: "",
    pages: PAGES.reduce((acc, fe) => ({ ...acc, [fe.item_id]: false }), {}),
  });
  const [isOpen, setIsOpen] = useState({
    integrations: props?.integrations || false,
    page: false,
  });

  useEffect(() => {
    if (state_ref?.current) {
      state_ref.current = state;
    }
  }, [state, state_ref]);

  return (
    <div className="space-y-6 sticky bottom-0 w-full bg-white">
      <Card>
        <CardContent className="p-2 space-y-4">
          <Collapsible
            open={isOpen.integrations}
            onOpenChange={() =>
              setIsOpen((prev) => ({
                ...prev,
                integrations: !prev.integrations,
              }))
            }
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="p-2 cursor-pointer">
                <CardTitle className="flex items-center justify-between">
                  <span>Integrations</span>
                  <div>
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CardTitle>
                <CardDescription>Select your integrations</CardDescription>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-4">
              <div>
                <Label htmlFor="email">Google Analytics</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      ga_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.ga_id}
                  placeholder="Enter GA Id"
                />
              </div>
              <div>
                <Label htmlFor="email">Posthog</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      post_hog: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.post_hog}
                  placeholder="Enter Posthog key"
                />
              </div>
              <div>
                <Label htmlFor="email">Crisp Support</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      crisp_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.crisp_id}
                  placeholder="Enter Crisp Id"
                />
              </div>
              <div>
                <Label htmlFor="twak_to_id">Twak To</Label>
                <Input
                  id="twak_to_id"
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      twak_to_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.twak_to_id}
                  placeholder="Enter Twak to Id"
                />
              </div>
              {INTEGRATIONS.map((feature) => (
                <div key={feature.item_id} className="flex items-center">
                  <Checkbox
                    onCheckedChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        premium_features: {
                          ...prev.premium_features,
                          [feature.item_id]: e,
                        },
                      }))
                    }
                    className="mr-2"
                    id="mdx_support"
                    checked={state.premium_features[feature.item_id]}
                  />
                  <Label htmlFor="mdx_support">{feature.title}</Label>
                </div>
              ))}
              <div className="flex items-center">
                <Checkbox
                  className="mr-2"
                  id="mdx_support"
                  readOnly
                  checked={true}
                />
                <Label htmlFor="mdx_support">Mdx Support</Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  className="mr-2"
                  id="sitemap_seo"
                  readOnly
                  checked={true}
                />
                <Label htmlFor="sitemap_seo">Sitemap SEO</Label>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-2 space-y-4">
          <Collapsible
            open={isOpen.page}
            onOpenChange={() =>
              setIsOpen((prev) => ({
                ...prev,
                page: !prev.page,
              }))
            }
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="p-2 cursor-pointer">
                <CardTitle className="flex items-center justify-between">
                  <span>Page</span>
                  <div>
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CardTitle>
                <CardDescription>Select your page</CardDescription>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4">
              {PAGES.map((feature) => (
                <div key={feature.item_id} className="flex items-center">
                  <Checkbox
                    className="mr-2"
                    id={feature.item_id}
                    onCheckedChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        pages: {
                          ...prev.pages,
                          [feature.item_id]: e,
                        },
                      }))
                    }
                    checked={state.pages[feature.item_id]}
                  />
                  <Label htmlFor={feature.item_id}>{feature.title}</Label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
});

NextBoilerPlate.displayName = "NextBoilerPlate";

export default NextBoilerPlate;
