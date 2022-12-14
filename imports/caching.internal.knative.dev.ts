// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema Image
 */
export class Image extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Image"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'caching.internal.knative.dev/v1alpha1',
    kind: 'Image',
  }

  /**
   * Renders a Kubernetes manifest for "Image".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ImageProps = {}): any {
    return {
      ...Image.GVK,
      ...toJson_ImageProps(props),
    };
  }

  /**
   * Defines a "Image" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ImageProps = {}) {
    super(scope, id, {
      ...Image.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...Image.GVK,
      ...toJson_ImageProps(resolved),
    };
  }
}

/**
 * @schema Image
 */
export interface ImageProps {
  /**
   * @schema Image#metadata
   */
  readonly metadata?: ApiObjectMetadata;

}

/**
 * Converts an object of type 'ImageProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImageProps(obj: ImageProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

